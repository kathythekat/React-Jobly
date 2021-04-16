import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import JoblyApi from "./JoblyAPI";
import UserContext from "./userContext";
import jwt from "jsonwebtoken";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") || null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isInvalidLogin, setIsInvalidLogin] = useState(false);

  async function signUp(userData) {
    const resp = await JoblyApi.register(userData);
    setToken(resp);
  }

  useEffect(() => {
    if (!token) {
      return;
    }
    async function getUserInfo() {
      JoblyApi.token = token;
      const resp = await JoblyApi.getUser(jwt.decode(token).username);
      setCurrentUser(resp);
    }
    getUserInfo();
  }, [token]);

  async function loginUser(userData) {
    try {
      const resp = await JoblyApi.login(userData);
      setToken(resp.token);
      setIsInvalidLogin(false);
    } catch (e) {
      setIsInvalidLogin(true);
    }
  }

  async function updateUser(formUsername, userData) {
    const resp = await JoblyApi.update(formUsername, userData);
    setCurrentUser(resp);
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem("userToken", token);
    } else {
      localStorage.clear();
    }
  }, [token]);

  async function applyForJob(id) {
    if (!currentUser) {
      return;
    }
    const jobId = await JoblyApi.applyForJob(currentUser.username, id);
    setCurrentUser((currentUser) => ({
      ...currentUser,
      applications: [...currentUser.applications, jobId],
    }));
  }

  console.log("current user", currentUser);
  // console.log("token", token);
  // console.log("localstorage!", localStorage.getItem("userToken"));

  function logout() {
    setToken(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            token,
            isInvalidLogin,
            currentUser,
            updateUser,
            applyForJob,
          }}
        >
          <NavBar logout={logout} />
          <Routes signUp={signUp} loginUser={loginUser} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
