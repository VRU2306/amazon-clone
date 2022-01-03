import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Cartitem.css";

// import oneplusImage from "../assets/OnePlus-7.jpg";
import amzFullfilled from "../assets/A_Fullfilled.png";

import { useStateValue } from "../StateProvider";

function CartItem(props) {
  const [{ basket }, dispatch] = useStateValue();

  const deleteItem = () => {
    // console.log("in Here");
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

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
          <button className="cartDeleteButton" onClick={deleteItem}>
           Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
