import { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ signUp }) {
  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const history = useHistory();
  const [formData, setFormData] = useState(initialFormData);

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
    history.push("/");
  }

  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">
          <h6>Username</h6>
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control my-2"
          id="username"
          name="username"
          value={formData.username}
          aria-describedby="emailHelp"
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">
          <h6>Password</h6>
        </label>
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
      <div className="form-group">
        <label htmlFor="firstName">
          <h6>First Name</h6>
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control my-2"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">
          <h6>Last Name</h6>
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control my-2"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          <h6>Email</h6>
        </label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control my-2"
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
