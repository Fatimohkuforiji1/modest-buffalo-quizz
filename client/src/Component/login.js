import React, { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form className="Login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <labe>
          username
          <input
            type="email"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </labe>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
