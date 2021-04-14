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
    lastName: "",
    isAdmin: false,
    email: "",
  });

  function signUp(userData) {
    setCurrentUser(userData);
  }

  useEffect(() => {
    async function registerUser() {
      const resp = await JoblyApi.register(currentUser);
      setToken(resp.token);
    }
    if (currentUser.username) registerUser();
  }, [currentUser]);

  console.log(currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes signUp={signUp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
