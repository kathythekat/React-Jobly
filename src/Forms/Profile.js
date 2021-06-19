import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../userContext";

function Profile() {
  const { currentUser, token, updateUser } = useContext(UserContext);
  const history = useHistory();
  const { firstName, lastName, email } = currentUser;
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
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await updateUser(currentUser.username, formData);
    history.push("/");
  }

  return (
    <div className="container mt-3">
      <h1>Edit your profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            <b>USERNAME</b>
          </label>
          <p>{currentUser.username}</p>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control my-2"
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
            className="form-control my-2"
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
            className="form-control my-2"
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
            className="form-control my-2"
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
    </div>
  );
}

export default Profile;
