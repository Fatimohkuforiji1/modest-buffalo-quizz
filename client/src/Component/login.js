import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   Login(details);
  // };

  async const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
const userLogin = {email, password
}
const res = await fetch("http://localhost:3100/api/register",{
 method: "POST",
 body: JSON.stringify(userLogin), 
 headers: {
        "Content-type": "application/json"
    }
})
console.log(res)
  
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

  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({
  //     name: "",
  //     email: "",
  //   });
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-head">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-list">
          {/* <label name="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({...details, name: e.target.value})}
              value={details.name}
            /> */}
        </div>
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
          <input type="submit" value="LOGIN" />
          {/* <button onClick={Logout}>Logout</button> */}
        </div>
      </div>
    </form>
  );
}
export default Login;

// import React, { useState } from "react";

// const Login = () => {
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//   }

//   return (
//     <div>
//       <form className="Login" onSubmit={handleSubmit}>
//         <h3>Login</h3>
//         <labe>
//           username
//           <input
//             type="email"
//             name="username"
//             value={username}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </labe>
//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
}
// export default Login;

// modified:   client/src/App.js
//         modified:   client/src/Component/login.js
//         modified:   server/api.js