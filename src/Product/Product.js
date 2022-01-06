import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

import StarRating from "react-svg-star-rating";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Product.css";
import { useStateValue } from "../StateProvider";
import { BrowserRouter , Routes, Route,Link,NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
function Product1(props) {
  const [{ basket,user,wishlist,PayNow }, dispatch] = useStateValue();

// console.log(user)
// const [{basket[]?.id}] =useStateValue();
  const Paynow = () => {
    dispatch({
      type: "PAYNOW",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

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
  const addToWishlist = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    // <BrowserRouter>
    <div className="product1">
       <p className="wishlist"><Tooltip title="Add to wishlist"><FavoriteBorderIcon onClick={addToWishlist} style={{cursor:'pointer'}}/></Tooltip></p>
      <div className="productImage">
        <img src={props.image} alt="not aval" />
      </div>
       
      <div className="productInfo">
        <p className="title">{props.title}</p>
       
        <CurrencyFormat
          renderText={(value) => <p className="price">{value}</p>}
          decimalScale={2}
          value={props.price}
          displayType={"text"}
          prefix={"₹ "}
        />
        <div className="starRating">
          <StarRating
            count="5"
            size="20"
            innerRadius="20"
            initialRating={props.rating}
            isReadOnly="true"
          />
        </div>
      </div>
      <Link to={user?`/payment`:`/login`}>
        <button className="buynowbutton" onClick={Paynow}>
        Buy now
      </button>
      </Link>
      {/* {basket.map((a)=>a.id)} */}
       <button className="addtocartbutton" onClick={addToBasket}>
        Add to Cart
      </button>

    
     
    </div>
    // </BrowserRouter>
  );
}

export default Product1;
