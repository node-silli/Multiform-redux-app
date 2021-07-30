import { SET_CREDITCARD, SET_CVV, SET_EXPIRY } from "./paymentDetailsActions";

const initialState = {
  creditCard: "",
  expiryDate: "",
  cvv: "",
};

const paymentDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDITCARD:
      return {
        ...state,
        creditCard: action.payload,
      };

    case SET_EXPIRY:
      return {
        ...state,
        expiryDate: action.payload,
      };
    case SET_CVV:
      return {
        ...state,
        cvv: action.payload,
      };
    default:
      return state;
  }
};

export default paymentDetailsReducer;
