import {
  SET_FULLNAME,
  SET_EMAIL,
  SET_PHONENUMBER,
} from "./basicDetailsActions";

const initialState = {
  fullName: "",
  email: "",
  phoneNumber: "",
};

const basicDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FULLNAME:
      return {
        ...state,
        fullName: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PHONENUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    default:
      return state;
  }
};

export default basicDetailsReducer;
