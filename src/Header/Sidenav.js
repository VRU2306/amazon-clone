import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";

import { auth } from "../firebase";

import { useStateValue } from "../StateProvider";

export default function SideNavigation(props) {
  const [{ user }, dispatch] = useStateValue();

  document.querySelector("body").style.overflow = props.act ? "hidden" : "";

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
      console.log("logged out");
    }
  };

  return (
    <div className={props.act ? "sideNavigation active" : "sideNavigation"}>
      <div className="sideNavNameHead">
        <AccountCircleIcon style={{ color: "white" }} />

        <Link to={!user && "/login"}>
          <h6 className="sideNavUser">
            Hello, {user ? user?.email : "sign In"}
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

      <div className="catagory">
          Home
      </div>
    </div>
  );
}
