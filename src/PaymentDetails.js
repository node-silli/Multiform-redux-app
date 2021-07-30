import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Css/PaymentDetails.css";
import Input from "./Utils/Input";
import Button from "./Utils/Button";
import {
  setCreditCardGlobal,
  setExpiryGlobal,
  setCvvGlobal,
} from "./redux/paymentDetails/paymentDetailsActions";
import { useDispatch } from "react-redux";

export default function PaymentDetails() {
  const [creditCard, setCreditCard] = useState();
  const [expiry, setExpiry] = useState();
  const [cvv, setCvv] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const showResults = () => {
    dispatch(setCreditCardGlobal(creditCard));
    dispatch(setExpiryGlobal(expiry));
    dispatch(setCvvGlobal(cvv));
    history.push("/results");
  };

  return (
    <div className="payment_main">
      <h1>Add a payment method</h1>

      <Input
        value={creditCard}
        onChange={(e) => setCreditCard(e.target.value)}
        placeholder="Enter Credit card number"
        type="number"
      />
      <Input
        onChange={(e) => setExpiry(e.target.value)}
        value={expiry}
        placeholder=" Enter Card's expiry date"
        type="date"
      />
      <Input
        onChange={(e) => setCvv(e.target.value)}
        value={cvv}
        placeholder="cvv number"
        type="number"
      />

      <div style={{ marginTop: "10px" }}>
        <Button onClick={showResults} />
      </div>
    </div>
  );
}
