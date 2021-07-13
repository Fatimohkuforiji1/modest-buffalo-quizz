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

    fetch("http://localhost:3100/api/student-login", {
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
           history.push("/api/quiz-home");
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
          <button type="submit" onClick={submitHandler}>
            Login
          </button>
          {/* 
            <Link to="/quiz-home" className="link">
              <button type="submit">Login</button>
          </Link>
           <Link to="/quiz-home" className="link">
              <button type="submit">Login</button>
          </Link> */}
        </div>
      </div>
    </form>
  );
}
export default StudentLogin
