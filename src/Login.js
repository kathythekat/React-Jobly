import { useState } from "react";

function Login({ loginUser }) {
  const [formData, setFormData] = useState("");

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    loginUser(formData);
    setFormData("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="username">Username</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          name="username"
          value={formData.username}
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
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

export default Login;
