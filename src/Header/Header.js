import React, { useState,useEffect } from "react";
import "./header.css";
import "./sidenav.css";

import amazon_logo from "../assets/amazon_logo.png";
// import { BrowserRouter , Routes, Route } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import SideNavigation from "./Sidenav";
import TintBackground from "./Sidenav";
import { getAuth, signOut } from "firebase/auth";
import { Link,NavLink } from "react-router-dom";

import { useStateValue } from "../StateProvider";

import { auth } from "../firebase";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();

  const setBarState = () => {
    setSideBar(!sideBar);
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_BASKET",
          user: authUser,
          basket:basket?.length
        })
      } else{
        dispatch({
          type: "SET_USER",
          user: null,
          basket:[],
        })
      }
    })
  }, [])
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
  return (
    // <BrowserRouter>
    <div className="header">
      <div className="headerLogoDiv">
        <MenuIcon className="menuIcon" onClick={setBarState} />

        <SideNavigation act={sideBar} button={setBarState} />
        <TintBackground act={sideBar} button={setBarState} />

        <NavLink to="/">
          <img className="headerLogo" src={amazon_logo} alt="amazon logo" />
        </NavLink>
      </div>

      <div className="headerSearch">
        <button className="dropDown">
          All
          <ArrowDropDownIcon style={{ width: "20px" }} />
        </button>
        <input
          type="text"
          className="searchInput"
          placeholder="Search in store..."
        />
        <button className="searchIcon">
          <SearchIcon />
        </button>
      </div>

      <div className="headerNav">
        <NavLink to={!user && "/login"}>
          <div onClick={logout} className="navOption">
            <span className="navOptionLineOne">
              Hello, {user ? user.email : "Member"}
            </span>
            <span className="navOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
              <ArrowDropDownIcon style={{ width: "20px" }} />
            </span>
          </div>
        </NavLink>
        <div className="headerNavwishlist">
        <Link to={user? "/wishlist":'/login'}>
            <span className="navOptionLineOne">
              Your
            </span>
            <span className="navOptionLineTwo">
             Wishlist
              <ArrowDropDownIcon style={{ width: "20px" }} />
            </span>
  
        </Link>
</div>
        <NavLink to="/orders">
          <div className="navOption1">
            <span className="navOptionLineOne">Returns</span>
            <span className="navOptionLineTwo">
              & Orders
              <ArrowDropDownIcon style={{ width: "20px" }} />
            </span>
          </div>
        </NavLink>

        <div className="navOption2">
          <span className="navOptionLineOne">Try</span>
          <span className="navOptionLineTwo">
            Prime
            <ArrowDropDownIcon style={{ width: "20px" }} />
          </span>
        </div>

        <NavLink to="/checkout">
          <div className="optionBasket">
            <ShoppingCartIcon className="basketIcon" />
            <span className="navOptionLineTwo basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
   
      </div>
           <div className="header__Search">
        <button className="dropDown">
          All
          <ArrowDropDownIcon style={{ width: "20px" }} />
        </button>
        <input
          type="text"
          className="searchInput"
          placeholder="Search in store..."
        />
        <button className="searchIcon">
          <SearchIcon />
        </button>
      </div>
    </div>
    // </BrowserRouter>
  );
}
