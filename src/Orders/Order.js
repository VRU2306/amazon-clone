import React, { useState, useEffect } from "react";
import db  from "../firebase";
import "./order.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

import OrdersItem from "./Orders";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (user) {
//       console.log("user abb aa gaya >>", user.email);

//       db.collection("users")
//         .doc(user?.uid)
//         .collection("orders")
//         .onSnapshot((snapshot) =>
//           setOrders(
//             snapshot.docs.map((doc) => ({
//               id: doc.id,
//               data: doc.data(),
//             }))
//           )
//         );
//       console.log("ORDERS >> ", orders);
//     } else {
//       setOrders([]);
//       console.log("user ki maa chud gayi");
//     }
//   }, [user]);

  const orderitems =
    orders?.length == 0 ? (
      <p className="noItems">
        You haven't placed any orders yet. Visit <Link to="/">Amazon.in</Link>
      </p>
    ) : (
      orders.map((order) => <OrdersItem order={order} />)
    );

  return (
    <div className="placedOrders">
      <div className="ordersHeader">
        <h3>Your Orders</h3>
        <div>
          <input type="text" placeholder="Search" className="orderSearch" />
          <button className="orderSearchButton">search order</button>
        </div>
      </div>
      <p className="noOfOrders">{orders?.length} order placed</p>
      <div className="orderList">{orderitems}</div>
    </div>
  );
}

export default Orders;
