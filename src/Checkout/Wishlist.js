import React from "react";
import { Link } from "react-router-dom";
import "./Wishlist.css";

import cartEmptyImage from "../assets/amazon_cart_empty.svg";

import CartItem from "./wishlistitem";
import SubTotal from "./Subtotal";

import { useStateValue } from "../StateProvider";

function CheckOut() {
  const [{ basket,wishlist }] = useStateValue();

  var items = wishlist.map((item, index) => (
    <CartItem
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
    />
  ));

  if (wishlist.length === 0) {
    return (
      <div className="cartEmpty">
        <img src={cartEmptyImage} alt="cart empty" className="cartEmptyImage" />
        <div className="emptycartHeading">
          <h2>Your  Wishlist is empty.</h2>
          <p>
            Your wishing list  is waiting. Give it purpose - fill it with
            groceries, clothing, household supplies, electronics and more.
            <br></br>
            Continue shopping on the Amazon.in <Link to="/">home</Link>, learn
            about today's deals, to fill your Wish List.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="checkOut">
        <div className="cartItemss">
          <h1>Your Wishlist</h1>
          {items}
        </div>
      </div>
    );
  }
}

export default CheckOut;
