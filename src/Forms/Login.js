import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import RedAlert from "../RedAlert";
import UserContext from "../userContext";

function Login({ loginUser }) {
  const { isInvalidLogin } = useContext(UserContext);
  const history = useHistory();
  const [formData, setFormData] = useState({ username: "", password: "" });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await loginUser(formData);
    history.push("/");
  }

  return (
    <div className="container my-2">
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
    <h1>Login</h1>
      {isInvalidLogin && <RedAlert />}
      <form className="w-100 d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className="form-group col-sm-4 my-2">
          <label htmlFor="username">Username</label>
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
        <div className="form-group col-sm-4 my-2">
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default Login;
