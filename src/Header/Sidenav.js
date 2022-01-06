import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

import { auth } from "../firebase";

import { useStateValue } from "../StateProvider";
import { getAuth, signOut } from "firebase/auth";
export default function SideNavigation(props) {
  const [{ user }, dispatch] = useStateValue();

  document.querySelector("body").style.overflow = props.act ? "hidden" : "";

function logout () {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }).catch((error) => {
     alert(error.message)
    });
}
  // const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className={props.act ? "sideNavigation active" : "sideNavigation"}>
      <div className="sideNavNameHead">
        <AccountCircleIcon style={{ color: "white" }} />

        <Link to={!user && "/login"}>
          <h6 className="sideNavUser" style={{textDecoration:"none"}}>
            Hello, {user ? user?.email : "sign In"}
            <div onClick={logout}> 
            <span className="navOptionLineTwoss">
              {user ? "Sign Out" : "Sign In"}
            
            </span></div>

          </h6>
        </Link>

        <CloseIcon
          style={{
            cursor: "pointer",
            color: "white",
            marginLeft: "auto",
          }}
          onClick={props.button}
        />
      </div>
  <Link to="/" style={{textDecoration:"none" ,color:"#000"}}>
      <div className="fucn">
          Home
      </div>
      </Link>
      <Link to={user? "/wishlist":'/login'} style={{textDecoration:"none" ,color:"#000"}}>
       <div className="fucn">
          Your Wishlist
      </div>
      </Link>
        <Link to="/orders" style={{textDecoration:"none" ,color:"#000"}}>
       <div className="fucn">
          Your Orders
      </div>
      </Link>
         <Link to="/checkout" style={{textDecoration:"none" ,color:"#000"}}>
       <div className="fucn">
          Your Basket
      </div>
      </Link>
    </div>
  );
}
