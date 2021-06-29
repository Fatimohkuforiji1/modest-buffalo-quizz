import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function LoginForm() {
  const { authenticate } = useContext(AuthContext);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    Login(details);
    const userLogin = { email, password };
    const res = await fetch("http://localhost:3100/api/login", {
      method: "POST",
      body: JSON.stringify(userLogin),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(res);
  }
  const Login = (details) => {
    if (details.email === user.email && details.password === user.password) {
      console.log("Logged in");
      setUser({
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-head">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-list">
          <label name="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />

          <div className="form-list">
            <label name="password">Password:</label>
            <input
              type="password"
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
          <button onClick={() => authenticate()} type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
export default LoginForm;
