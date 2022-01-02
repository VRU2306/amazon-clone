import React from "react";
import "./tint.css";

export default function TintBackground(props) {
  return (
    <div
      className={props.act ? "tintBackgroundActive" : "tintBackgroundClose"}
      onClick={props.button}
    ></div>
  );
}
