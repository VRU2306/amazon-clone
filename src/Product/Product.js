import React from "react";
import CurrencyFormat from "react-currency-format";

import StarRating from "react-svg-star-rating";

import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product1(props) {
  const [{ basket }, dispatch] = useStateValue();

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

  return (
    <div className="product1">
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
      <button className="addtocartbutton" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product1;
