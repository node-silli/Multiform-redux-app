import React from "react";
import "../Css/Button.css";

export default function Button(props) {
  return (
    <div>
      <div class="box-1">
        <div onClick={props.onClick} class="btn btn-one">
          <span>Submit</span>
        </div>
      </div>
    </div>
  );
}
