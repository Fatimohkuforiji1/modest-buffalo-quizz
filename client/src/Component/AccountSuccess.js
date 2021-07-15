import React from "react";
import { Link } from "react-router-dom";
const AccountSuccess = ({role}) => {
  return (
    <div className="form-head">
      <div className="registered-container">
        <div className="signUp-title">
          <h2>Account Created</h2>
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
