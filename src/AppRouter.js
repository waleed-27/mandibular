import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Signupp from "./pages/Signupp";
import UserInput from "./pages/Userinput";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Loginpage} />
        <Route path="/signup" component={Signupp} />
        <Route path="/userinput" component={UserInput} />
      </div>
    </Router>
  );
};

export default AppRouter;
