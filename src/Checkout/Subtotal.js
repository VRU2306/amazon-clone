import React,{useState} from "react";
import "./Subtotal.css";

import PurchaseProtectionImage from "../assets/Purchase_Protection.png";

import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
function SubTotal() {
    const [count, setCount] = useState(1);
      const [{ basket ,user}] = useStateValue();
     var items = basket.map((item, index) => (
    <CartItem
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
    />
  ));
  console.log(items)

  const history = useNavigate();
// console.log(user)
  var totalPrice = 0;
  basket.map((item) => {
    totalPrice += parseInt(item.price*count);
  });

  console.log("totalPrice = ", totalPrice);

  return (
    <div className="subTotal">
      <img src={PurchaseProtectionImage} alt="purchase protection" />
      <CurrencyFormat
        renderText={(value) => (
          <div className="subTotalPrice">
            <p>
              Subtotal({basket.length} Items): <strong>{value}</strong>
            </p>
            <small className="isAGift">
              <input type="checkbox" style={{ marginRight: "5px" }} />
              This order is a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        prefix={"₹ "}
      />

      <button
        onClick={(e) => history(user?"/payment":"/login")}
        className="checkOutButton"
      >
        Proceed to buy
      </button>
    </div>
  );
}
export default SubTotal;
