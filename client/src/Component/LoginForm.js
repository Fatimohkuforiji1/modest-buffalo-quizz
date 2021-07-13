import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../Context/AuthContext";


function LoginForm() {
  let history = useHistory();
  const { authenticate } = useContext(AuthContext);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [isCorrect, setIsCorrect] = useState(false);


  function submitHandler(e) {
    e.preventDefault();
    const userLogin = { email: details.email, password: details.password };

    fetch("/api/login", {
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
          history.push("/teacherQuiz");
        } else {

          setIsCorrect(false);
          alert("Incorrect login details")
        }
      });
  }

  return (
    <form>
      <div className="form-head">
        <h2>Login</h2>

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

          <div className="form-list">
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
          </div>
          
          <button className="login-btn" type="submit" onClick={submitHandler}>
            Login
          </button>
        
        </div>
      </div>
    </form>
  );
}
export default LoginForm;
