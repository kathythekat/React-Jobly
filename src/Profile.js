import { useContext } from "react";
import UserContext from "./userContext";

function Profile() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return <div>{currentUser.username}</div>;
}

export default Profile;
