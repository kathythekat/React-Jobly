import { useContext } from "react";
import UserContext from "./userContext";
import "./Home.css";

function Home() {
  const { currentUser, token } = useContext(UserContext);

  return (
    <div className="Home h-100 d-flex flex-column justify-content-center align-items-center">
      {token ? (
        <div className="container text-light d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome{", " + currentUser?.firstName}!</h1>
        </div>
      ) : (
        <div className="text-light d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome to Jobly!</h1>
          <h3>Your dream career starts here.</h3>
        </div>
      )}
    </div>
  );
}

export default Home;
