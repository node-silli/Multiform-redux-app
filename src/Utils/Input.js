import React from "react";
import "../Css/Input.css";

export default function Input(props) {
  return (
    <div className="input_main">
      <input className="custom_input" {...props} />
    </div>
  );
}
