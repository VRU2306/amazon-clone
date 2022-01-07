import React, { useState, useEffect } from "react";
import "./payment.css";

import axios from "./axios";
import CartItem from "../Checkout/CartItem";
import db  from "../firebase";

import { useStateValue } from "../StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { useNavigate,Link } from "react-router-dom";
import { collection,onSnapshot,addDoc,setDoc } from "firebase/firestore";
function Payment() {
  const [{ basket,payNow, user }, dispatch] = useStateValue();
  const history = useNavigate();

  var totalPrice = 0;
  basket.map((item) => {
    totalPrice += parseInt(item.price);
  });
   var totalPriceS = 0;
 payNow.map((item) => {
    totalPrice += parseInt(item.price);
  });
  const elements = useElements();
  // const stripe = useStripe();
  var paynow=payNow.map((item,index) => (
    <CartItem
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
    />
  ));
console.log(payNow)
  var items = basket.map((item, index) => (
    <CartItem
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
    />
  ));

  const [succeeded, setsucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [clientSecret, setCLientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${totalPrice * 100}`,
      });
      setCLientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${totalPriceS * 100}`,
      });
      setCLientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [payNow]);
  const stripe = useStripe()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
   
      .then(({paymentIntent} ) => {
        console.log({paymentIntent})
        const myDoc=collection(db,"users")
        addDoc(myDoc,{
         user:user?.uid,
        })
        console.log(basket);
       const Asd=collection(db,"users",user?.uid,"orders")
      addDoc(Asd,{
        // id:paymentIntent.id,
        name: user.email,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        basket: { basket } ,
        payNow:{payNow}

        })
      

        setsucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          case: "EMPTY_BASKET",
        });

        history("/orders");
      });
  };

  const handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
      <div className="checkOut">
      <h2>Review</h2>

      <div className="checkoutContent">
        <div className="contentDiv">
          <h5>Delivery Address: </h5>
          <div className="address">
            <p>Name: {user?.email}</p>
            <p>React Developer</p>
          </div>
        </div>
        <div className="contentDiv">
          <h5>Review Cart:</h5>
          <div className="Paymentcard"> 
          <div className="cartItemsS">{items}</div>
           <div className="cartItemsS">{paynow}</div>
        </div>
        </div>
        <div className="contentDiv">
          <h5>card details:</h5>
          <h6 style={{marginLeft:"-150px",marginTop:"20px"}}>Use 424242... for test payment</h6>
          <div className="cardDetails">
            <br></br>
  
            <form className="cardForm" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="orderTotal">
                <CurrencyFormat
                  renderText={(value) => (
                    <p>
                      order total: <strong>{value}</strong>
                    </p>
                  )}
                  decimalScale={2}
                  value={totalPrice ||totalPriceS}
                  displayType={"text"}
                  prefix={"₹ "}
                />
                <button
                  type="submit"
                  className="Buttonsub"
                  disabled={processing || disabled || succeeded}
                >
                  <span>
                    {processing ? <p>processing...</p> : "Place order"}
                  </span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
