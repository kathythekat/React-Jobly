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
  const { token, isInvalidLogin } = useContext(UserContext);
  const isAuthenticated = Boolean(token);
  return (
    <Switch>
      <Route exact path="/">
        {isInvalidLogin ? <Redirect to="/login" /> : <Home />}
      </Route>
      <Route exact path="/companies">
        {isAuthenticated ? <CompanyList /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/companies/:handle">
        {isAuthenticated ? <CompanyDetail /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/jobs">
        {isAuthenticated ? <JobsList /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/login">
        <Login loginUser={loginUser} />
      </Route>
      <Route exact path="/signup">
        <Signup signUp={signUp} />
      </Route>
      <Route exact path="/profile">
        {isAuthenticated ? <Profile /> : <Redirect to="/login" />}
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
