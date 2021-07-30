import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicDetails from "./BasicDetails";
import PaymentDetails from "./PaymentDetails";
import AddressDetails from "./AddressDetails";
import ResultPage from "./Utils/ResultPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/results" component={ResultPage} />
        <Route path="/payment">
          <PaymentDetails />
        </Route>

        <Route path="/address">
          <AddressDetails />
        </Route>
        <Route path="/" component={BasicDetails} />
      </Switch>
    </Router>
  );
}

export default App;
