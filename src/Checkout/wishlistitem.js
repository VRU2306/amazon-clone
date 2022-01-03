import React from "react";
import CurrencyFormat from "react-currency-format";

import "./wishlistitem.css";

// import oneplusImage from "../assets/OnePlus-7.jpg";
import amzFullfilled from "../assets/A_Fullfilled.png";

import { useStateValue } from "../StateProvider";

function CartItem(props) {
  const [{ wishlist }, dispatch] = useStateValue();
 const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  const deleteItems = () => {
    // console.log("in Here");
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
    });
  };

  return (
    <div className="cartItem">
      <div className="ImageDiv">
        <img src={props.image} alt="image" className="cartItemImage" />
      </div>

      <div className="infos">
        <div className="namePriceInfos">
          <p className="cartItemTitles">
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

        <div className="faltuInfos">
          <p style={{ color: "green" }}>In stock</p>
          {/* <p>Eligible for FREE shipping</p> */}
          <img src={amzFullfilled} alt="amazon full filled" />
        </div>

        <div className="buttonInfos">
          <button className="cartAddButton" onClick={addToBasket}>
          Add to Cart
          </button>
          <br></br>
           <button className="cartDeleteButton" onClick={deleteItems}>
          Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
