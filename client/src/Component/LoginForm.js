import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../Context/AuthContext";


 
function LoginForm() {

  const history = useHistory();
  const { authenticate } = useContext(AuthContext);
  const [details, setDetails] = useState({ email: "", password: "" });
  // const [user, setUser] = useState({ email: "", password: "" });
  // const [error, setError] = useState("");

  // const Login = (details) => {
  //   console.log(details);
  //       console.log(user);
  //   if (details.email === user.email && details.password === user.password) {
  //     console.log("Logged in");
  //     setUser({
  //       email: details.email,
  //     });
  //   } else {
  //     console.log("Details do not match");
  //     setError("Details do not match");
  //   }
  // };

  function submitHandler(e) {
    e.preventDefault();
    console.log(details);
    // Login(details);
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
          <label name="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />

          <div className="form-list">
            <label name="password">Password:</label>
            <input
              type="text"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          {/* <input type="submit" value="LOGIN" /> */}
          {/* <button onClick={Logout}>Logout</button> */}
          <button type="submit"
          href = "/teacherQuiz">Login </button>
        </div>
      </div>
    </form>
  );
}
export default LoginForm;