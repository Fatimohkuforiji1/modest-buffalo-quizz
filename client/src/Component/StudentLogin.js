import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../Context/AuthContext";


const StudentLogin =() => {
  let history = useHistory();
  const { authenticate } = useContext(AuthContext);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [isCorrect, setIsCorrect] = useState(false);


  function submitHandler(e) {
    e.preventDefault();
    // console.log(details);    
    const userLogin = { email: details.email, password: details.password };

    fetch("/api/student-login", {
      method: "POST",
      body: JSON.stringify(userLogin),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Login Sucessful") {
          setIsCorrect(true);
          authenticate();
           history.push("/quiz-home");
        } else {
        alert("Incorrect login details ")
          setIsCorrect(false);
        }
      });
  }

  return (
    <form>
      <div className="form-head">
        <h2>Login</h2>
        {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
        <div className="form-list">
          <label name="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />

          <label name="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          
          <button className="login-btn" type="submit" onClick={submitHandler}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
export default StudentLogin
