import React from "react";
import "./Orders.css";
import moment from "moment";

import oneplusImage from "../assets/OnePlus-7.jpg";

function OrdersItem({ order }) {
  return (
    <div className="orderItem">
      <div className="orderHeader">
        <div className="innerDiv">
          <div className="orderHeaderContent">
            <p className="contentLineOne">ORDER PLACED</p>
            <p className="contentLineTwo">
              {moment.unix(order?.data.created).format("MMMM Do YYYY, h:mma")}
            </p>
          </div>
          <div className="orderHeaderContent">
            <p className="contentLineOne">TOTAL</p>
            <p className="contentLineTwo">{order?.data.amount / 100}</p>
          </div>
        </div>
        <div className="orderHeaderContent">
          <p className="contentLineOne">ORDER NO</p>
          <p className="contentLineTwo">{order?.id}</p>
        </div>
      </div>

      <div className="orderContent">
        <div className="innerDiv">
          <div className="imageDiv">
            <img src={oneplusImage} alt="item image" className="itemImage" />
          </div>
          <div className="orderDetails">
            <p className="itemName"></p>
            <p className="soldBy">Sold by Amazon.in</p>
            <p className="returnNA">Return not available</p>
          </div>
        </div>
        <div className="buttons">
          <button className="button">Buy Again</button>
          <button className="button">Write product review</button>
        </div>
      </div>
    </div>
  );
}

export default OrdersItem;
