import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import axios from "axios";
import JoblyApi from "./JoblyAPI";

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    firstName: "",
  });

  async function signUp(userData) {
    const resp = await JoblyApi.register(userData);
    const { username, firstName } = userData;
    setToken(resp);
    setCurrentUser((currentUser) => ({ username, firstName }));
  }

  useEffect(() => {
    if (currentUser.username) signUp();
  }, [token]);

  function loginUser(userData) {
    //set token
    //keep track of currentUser
  }

  console.log("current user", currentUser, "token:", token);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes signUp={signUp} loginUser={loginUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
