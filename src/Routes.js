import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobsList from "./JobsList";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import { useContext } from "react";
import UserContext from "./userContext";

function Routes({ signUp, loginUser }) {
  const { token } = useContext(UserContext);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        {token ? <CompanyList /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/companies/:handle">
        {token ? <CompanyDetail /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/jobs">
        {token ? <JobsList /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/login">
        <Login loginUser={loginUser} />
      </Route>
      <Route exact path="/signup">
        <Signup signUp={signUp} />
      </Route>
      <Route exact path="/profile">
        {token ? <Profile /> : <Redirect to="/login" />}
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
