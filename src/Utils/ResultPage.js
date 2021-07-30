import React from "react";
import "../Css/ResultPage.css";
import { useSelector } from "react-redux";

export default function ResultPage() {
  //basic Details
  const name = useSelector((state) => state.Basic.fullName);
  const email = useSelector((state) => state.Basic.email);
  const phonenumber = useSelector((state) => state.Basic.phoneNumber);

  //address Details

  const buildingNumber = useSelector((state) => state.Address.buildingNumber);
  const pincode = useSelector((state) => state.Address.pinCode);
  const flat = useSelector((state) => state.Address.flatNumber);

  //payment details
  const creditcard = useSelector((state) => state.Payment.creditCard);
  const expirydate = useSelector((state) => state.Payment.expiryDate);
  const cvv = useSelector((state) => state.Payment.cvv);

  return (
    <div className="result_main">
      <div className="result_details">
        <div className="detail_columns">
          <h2>Basic Details</h2>
          <p className="extp">Name: {name}</p>
          <p className="extp">Email:{email}</p>
          <p className="extp">Contact number:{phonenumber}</p>
        </div>

        <div className="detail_columns">
          <h2>Resident Details</h2>
          <p className="extp">Building Number: {buildingNumber} </p>
          <p className="extp">PinCode:{pincode}</p>
          <p className="extp">Flat No:{flat}</p>
        </div>
        <div className="detail_columns">
          <h2>Payment Information</h2>
          <p className="extp">Card Number:{creditcard}</p>
          <p className="extp">Expiry Date:{expirydate}</p>
          <p className="extp">Cvv:{cvv}</p>
        </div>
      </div>
    </div>
  );
}
