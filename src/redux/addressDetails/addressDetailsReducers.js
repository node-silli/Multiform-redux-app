import { SET_BUILDING, SET_FLAT, SET_PINCODE } from "./addressDetailsActions";

const initialState = {
  buildingName: "",
  pinCode: "",
  flatNumber: "",
};

const addressDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUILDING:
      return {
        ...state,
        buildingName: action.payload,
      };
    case SET_PINCODE:
      return {
        ...state,
        pinCode: action.payload,
      };
    case SET_FLAT:
      return {
        ...state,
        flatNumber: action.payload,
      };
    default:
      return state;
  }
};

export default addressDetailsReducer;
