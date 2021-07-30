import React, { useState } from "react";
import Input from "./Utils/Input";
import Button from "./Utils/Button";
import "./Css/AddressDetails.css";
import { useHistory } from "react-router-dom";
import {
  setBuildingGlobal,
  setPinCodeGlobal,
  setFlatGlobal,
} from "../src/redux/addressDetails/addressDetailsActions";
import { useDispatch } from "react-redux";

export default function AddressDetails() {
  const [buildingName, setBuildingName] = useState();
  const [pinCode, setPinCode] = useState();
  const [flatNumber, setFlatNumber] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const pushPayment = () => {
    dispatch(setBuildingGlobal(buildingName));
    dispatch(setPinCodeGlobal(pinCode));
    dispatch(setFlatGlobal(flatNumber));
    history.push("/payment");
  };

  return (
    <div className="address_main">
      <h1>Home address here</h1>

      <Input
        value={buildingName}
        onChange={(e) => setBuildingName(e.target.value)}
        placeholder="Enter Building number"
        type="text"
      />
      <Input
        onChange={(e) => setPinCode(e.target.value)}
        value={pinCode}
        placeholder="Enter Area pin code"
        type="number"
      />
      <Input
        onChange={(e) => setFlatNumber(e.target.value)}
        value={flatNumber}
        placeholder="Enter your flat no."
        type="text"
      />

      <div style={{ marginTop: "10px" }}>
        <Button onClick={pushPayment} />
      </div>
    </div>
  );
}
