export const SET_CREDITCARD = "SET_CREDITCARD";
export const SET_EXPIRY = "SET_EXPIRY";
export const SET_CVV = "SET_CVV";

export const setCreditCardGlobal = (cardNum) => {
  return {
    type: SET_CREDITCARD,
    payload: cardNum,
  };
};

export const setExpiryGlobal = (expDate) => {
  return {
    type: SET_EXPIRY,
    payload: expDate,
  };
};

export const setCvvGlobal = (cvv) => {
  return {
    type: SET_CVV,
    payload: cvv,
  };
};
