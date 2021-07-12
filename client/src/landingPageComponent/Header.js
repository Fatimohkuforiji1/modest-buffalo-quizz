import React, {useState, useContext} from 'react'
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Header.css";
import cyf_logo from "../Component/img/cyf_logo.png"

const Header = () => {
const history = useHistory()

  const { isAuthenticated, authenticate } = useContext(AuthContext);
  const handleLogout = ()=>{
    authenticate()
    history.push("/")
  }

  return (
    
      <nav className="navbar">
        <img className="logo" src={cyf_logo} alt="logo" />
        <ul className="nav-links">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="link logoutLink">
              <li>Logout</li>
            </button>
          ) : (
            <>
              <Link to="register-teacher" className="link">
                <li>Register</li>
              </Link>
              <Link to="/login" className="link">
                <li>Teacher Login</li>
              </Link>
              <Link to="/student-login" className="link">
                <li>Student Login</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
  
  );
};

export default Header;

