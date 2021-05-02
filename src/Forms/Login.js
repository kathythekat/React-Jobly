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
    <div>
      {isInvalidLogin && <RedAlert />}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
