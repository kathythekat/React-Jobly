import { useContext } from "react";
import UserContext from "./userContext";

function Home() {
  const { currentUser, token } = useContext(UserContext);
  return (
    <div className="my-3 d-flex justify-content-center">
      {token ? (
        <h1>Welcome back, {currentUser.firstName}!</h1>
      ) : (
        <h1>Welcome to Jobly!</h1>
      )}
    </div>
  );
}

export default Home;
