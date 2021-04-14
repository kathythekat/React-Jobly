import { NavLink, Link } from "react-router-dom";
import "./NavBar.css"

function NavBar({ token, logout }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand mr-auto">
          Jobly
        </Link>
        {token && (
          <nav className="navbar-expand navbar" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                <NavLink to="/companies" className="nav-link">
                  Companies
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink to="/jobs" className="nav-link">
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink to="/logout" className="nav-link disabled">
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        )}

        {!token && (
          <nav className="navbar navbar-expand" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink to="/signup" className="nav-link">
                  Signup
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </>
  );
}

export default NavBar;
