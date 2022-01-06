import React, { useState, useEffect } from "react";
import db  from "../firebase";
import "./order.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

import OrdersItem from "./Orders";
import { collection,onSnapshot,addDoc,setDoc,getDoc } from "firebase/firestore";
function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {

     onSnapshot(collection(db,"orders"),(snapshot) => 
             setOrders(snapshot.docs.map((doc) => ({
                data:doc.data(),
                id: doc.id,
           
            }))))
    } else {
      setOrders([]);
    }
  }, [user]);

     useEffect(() => 
             onSnapshot(collection(db,"users"),(snapshot) => 
             getDoc(snapshot.docs.map((doc) => ({
                user:user?.uid
           
            }))))
      
        ,[]
    )

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
