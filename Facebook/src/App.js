import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./Home/Home.jsx";
import SignUp from "./SignUp/SignUp.jsx"
import SignIn from "./SignIn/SignIn.jsx"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signUp" component={SignUp}/>
        <Route path="/signIn" component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
