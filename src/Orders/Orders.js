import React from "react";
import "./Orders.css";
import moment from "moment";

function OrdersItem({ order }) {
  // console.log(order?.data.payNow.payNow)
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
            <p className="contentLineTwo">{order?.data.amount/100}</p>
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
            {/*  eslint-disable-next-line */}
            <img src={order?.data.basket.basket[0]?.image||order?.data.payNow.payNow[0]?.image} alt="item image" className="itemImage" />
           
          </div>
          <div className="orderDetails">
            <p className="itemName">{order?.data.basket.basket[0]?.title||order?.data.payNow.payNow[0]?.title}</p>
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
