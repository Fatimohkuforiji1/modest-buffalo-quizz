import React from "react";
import { Link } from "react-router-dom";
const AccountSuccess = () => {
  return (
    <div className="signup-success">
      <h1>CODE YOUR FUTURE</h1>
      <div className="registered-container">
        <div className="registered">
          <h1>Account Created</h1>
        </div>
        <button>
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};
export default AccountSuccess;
