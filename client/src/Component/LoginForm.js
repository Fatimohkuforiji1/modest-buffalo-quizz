import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../Context/AuthContext";


 
function LoginForm() {

  const history = useHistory();
  const { authenticate } = useContext(AuthContext);
  const [details, setDetails] = useState({ email: "", password: "" });


  function submitHandler(e) {
    e.preventDefault();
    console.log(details);
    
    const userLogin = { email : details.email, password : details.password };
    authenticate(userLogin.email);
    fetch("http://localhost:3100/api/login", {
      method: "POST",
      body: JSON.stringify(userLogin),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        if(data.userLogin){
          history.push("/quiz-home");
        }
      });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-head">
        <h2>Login</h2>
        {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
        <div className="form-list">
          <label name="email"></label>
          <input
            className="form-input"
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />

          {/* <div className="form-list"> */}
          <label name="password"></label>
          <input
            className="form-input"
            type="text"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          {/* </div> */}
          {/* <input type="submit" value="LOGIN" /> */}
          {/* <button onClick={Logout}>Logout</button> */}
        </div>
        <button className="login-btn" type="submit" onClick="window.location.href='/teacherQuiz'">
          Login
        </button>
      </div>
    </form>
  );
}
export default LoginForm;

//<button onclick="window.location.href='/page2'">Continue</button>