import React from "react";
import { Link } from "react-router-dom";
const AccountSuccess = ({role}) => {
  return (
    <div className="form-head">
      <h1>CODE YOUR FUTURE</h1>
      <div className="registered-container">
        <div className="registered">
          <h1>Account Created</h1>
        </div>
        {role === "teacher" ? (
          <button>
            <Link className="link" to="/login">
              Teacher Login
            </Link>
          </button>
        ) : (
          <button>
            <Link className="link" to="/student-login">
              Student Login
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};
export default AccountSuccess;
