import React from 'react'

const AllLoginFiles = () => {
    return (
      <div>
        <div>
          <h2>Registration</h2>
          <label>Username</label>
          <input type="text"></input>
          <label> Password</label>
          <input type="password" placeholder="Password"></input>
          <button>Register</button>
        </div>
        <div className="Login">
          <h2> Login </h2>
          <input type="text" placeholder="Username.."></input>
          <input type="password" placeholder="Password"></input>
          <button>Login</button>
        </div>
      </div>
    );
}

export default AllLoginFiles
