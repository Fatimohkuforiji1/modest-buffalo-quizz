import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import QuestionMultipleChoice from "../QuizComponent/QuestionMultipleChoice";

const LoginDetails = () => {
  

  const { authenticate } = useContext(AuthContext);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form className="Login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>
          username
          <input
            type="email"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={()=> authenticate()} type="submit">Login</button>
        

        
      </form>
    </div>
  );
};

export default LoginDetails;
