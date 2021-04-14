import { useState } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "./JoblyAPI";

function Signup({ signUp }) {
  const history = useHistory();
  const [formData, setFormData] = useState("");

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await signUp(formData);
    setFormData("");
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={formData.username}
          aria-describedby="emailHelp"
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
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
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          placeholder=""
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
          value={formData.lastName}
          placeholder=""
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
          value={formData.email}
          placeholder=""
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Signup;
