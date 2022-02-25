import React,{useState} from "react";
import CurrencyFormat from "react-currency-format";

import "./Cartitem.css";

// import oneplusImage from "../assets/OnePlus-7.jpg";
import amzFullfilled from "../assets/A_Fullfilled.png";

import { useStateValue } from "../StateProvider";

function CartItem(props) {
  const [{ basket,payNow }, dispatch] = useStateValue();

  const deleteItem = () => {
    // console.log("in Here");
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };
const deleteItema = () => {
    // console.log("in Here");
    dispatch({
      type: "REMOVE_FROM_PAYNOW",
      id: props.id,
    });
  };
  const [count, setCount] = useState(1);

  function increment() {
    setCount((previousCount) => previousCount + 1);
  }

  function decrement() {
    setCount((previousCount) => previousCount - 1);
  }
  return (
    <div className="cartItem">
      <div className="ImageDiv">
        <img src={props.image} alt="image" className="cartItemImage" />
      </div>

      <div className="info">
        <div className="namePriceInfo">
          <p className="cartItemTitle">
            <strong>{props.title}</strong>
          </p>

          <CurrencyFormat
            renderText={(value) => (
              <p className="cartItemPrice">
                <strong>{value}</strong>
              </p>
            )}
            decimalScale={2}
            value={props.price}
            displayType={"text"}
            prefix={"₹ "}
          />
        </div>

        <div className="faltuInfo">
          <p style={{ color: "green" }}>In stock</p>
          <p>Eligible for FREE shipping</p>
          <img src={amzFullfilled} alt="amazon full filled" />
        </div>

        <div className="buttonInfo">
          {count===0?(
       <button className="cartDeleteButton" onClick={deleteItem}>
           Remove from Cart
          </button>):
          <div>  
            <button  className="cartDeleteButton" onClick={increment} name="+" >+</button>
            {count}
      <button  className="cartDeleteButton" onClick={decrement} name="-" >-</button></div>
          }

        </div>
      </div>
    </div>
  );
}

export default CartItem;
