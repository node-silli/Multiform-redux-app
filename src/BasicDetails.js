import React, { useState } from "react";
import "./Css/BasicDetails.css";
import Input from "./Utils/Input";
import { useHistory } from "react-router-dom";
import Button from "./Utils/Button";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setFullName,
  setPhoneNumber,
} from "./redux/basicDetails/basicDetailsActions";

export default function BasicDetails() {
  const [LocalName, setLocalName] = useState("");
  const [LocalEmail, setLocalEmail] = useState("");
  const [LocalPhoneNumber, setLocalPhoneNumber] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const submitDetails = () => {
    history.push("/address");
    dispatch(setFullName(LocalName));
    dispatch(setEmail(LocalEmail));
    dispatch(setPhoneNumber(LocalPhoneNumber));
  };

  return (
    <div className="basicdetails_main">
      <h2>Basic Details</h2>
      <Input
        value={LocalName}
        onChange={(e) => setLocalName(e.target.value)}
        placeholder="Enter full name"
        type="text"
      />
      <Input
        onChange={(e) => setLocalEmail(e.target.value)}
        value={LocalEmail}
        placeholder="Enter your Email"
        type="email"
      />
      <Input
        onChange={(e) => setLocalPhoneNumber(e.target.value)}
        value={LocalPhoneNumber}
        placeholder="Enter your phone number"
        type="number"
      />

      <div
        style={{ marginTop: "20px", marginRight: "3px" }}
        className="button_"
      >
        <Button onClick={submitDetails} />
      </div>
    </div>
  );
}
