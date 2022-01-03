import React from "react";
import { Link } from "react-router-dom";
import "./checkout.css";

import cartEmptyImage from "../assets/amazon_cart_empty.svg";

import CartItem from "./CartItem";
import SubTotal from "./Subtotal";

import { useStateValue } from "../StateProvider";

function CheckOut() {
  const [{ basket }] = useStateValue();

  var items = basket.map((item, index) => (
    <CartItem
      id={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
    />
  ));

  if (basket.length === 0) {
    return (
      <div className="cartEmpty">
        <img src={cartEmptyImage} alt="cart empty" className="cartEmptyImage" />
        <div className="emptycartHeading">
          <h2>Your Amazon Basket is empty.</h2>
          <p>
            Your shopping cart is waiting. Give it purpose- fill it with
            groceries, clothing, household supplies, electronics and more.
            <br></br>
            Continue shopping on the Amazon.in <Link to="/">home</Link>, learn
            about today's deals, or visit your Wish List.
          </p>
        </div>
      </div>
    );
  } else {
    return (
       <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Shopping Cart</h3>
           
          {items}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal/>
      </div>
</div>
    );
  }
}

export default CheckOut;
