import React, {useState, useContext} from 'react'
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Header.css"


const Header = () => {
const history = useHistory()

  const { isAuthenticated, authenticate } = useContext(AuthContext);
  const handleLogout = ()=>{
    authenticate()
    history.push("/")
  }

  return (
    <nav className="navbar">
      <h6 className="logo">CodeYourFuture </h6>
      <ul className="nav-links">
        {isAuthenticated ? (
          <button onClick={handleLogout}className="link logoutLink">
            <li>Logout</li>
          </button>
        ) : (
          <>
            <Link to="/register" className="link">
              <li>Register</li>
            </Link>
            <Link to="/login" className="link">
              <li>Login</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;

