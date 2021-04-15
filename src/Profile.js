import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./userContext";

function Profile() {
  const { currentUser, token, updateUser } = useContext(UserContext);
  const history = useHistory();
  const { firstName, lastName, email, username } = currentUser;
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    email,
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
    console.log(formData);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await updateUser(currentUser.username, formData);
    history.push("/");
  }

  console.log("current user PROFILE", currentUser);
  console.log("token PROFILE", token);
  console.log("localstorage PROFILE!", localStorage.getItem("userToken"));

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <p>{currentUser.username}</p>
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName || currentUser.firstName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={formData.lastName || currentUser.lastName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={formData.email || currentUser.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Confirm Password</label>
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Profile;
