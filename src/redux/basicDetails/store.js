import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import addressDetailsReducer from "../addressDetails/addressDetailsReducers";
import paymentDetailsReducer from "../paymentDetails/paymentDetailsReducers";
import basicDetailsReducer from "./basicDetailsReducers";

const rootReducer = combineReducers({
  Basic: basicDetailsReducer,
  Address: addressDetailsReducer,
  Payment: paymentDetailsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
