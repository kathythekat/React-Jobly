import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import axios from "axios";
import JoblyApi from "./JoblyAPI";

function App() {

  let initialUser = {
    username: "",
    firstName: "",
  }
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(initialUser);

  async function signUp(userData) {
    const resp = await JoblyApi.register(userData);
    const { username, firstName } = userData;
    setToken(resp);
    setCurrentUser((currentUser) => ({ username, firstName }));
  }

  useEffect(() => {
    async function getUserInfo() {
      const resp = await JoblyApi.getUser(currentUser.username);
      setCurrentUser(user => resp)
    }
  }, [token]);

  async function loginUser(userData) {
    const resp = await JoblyApi.login(userData);
    const { username, firstName } = userData;
    setToken(resp);
    setCurrentUser((currentUser) => ({ username, firstName }));
  }

  function logout() {
    setToken(null)
    setCurrentUser(user => initialUser)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar token={token} logout={logout}/>
        <Routes signUp={signUp} loginUser={loginUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
