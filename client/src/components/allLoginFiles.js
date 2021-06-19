import React, {useState} from 'react'

const AllLoginFiles = () => {
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("");

  
const handleUsernameReg = (event)=>{
const registrationName= event.target.value;
setUsernameReg(registrationName);

}

const handlePasswordReg = (event) => {
  const regPassword = event.target.value;
  setPasswordReg(regPassword);
   
};
//handles data got from the client and sent to the backend
const getRegData = {
  name: usernameReg,
  address: passwordReg
};
const register = ()=>{
   fetch("http://localhost:3100/api/teachers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getRegData),
  })
    .then((response) => {
      console.log(response.json())
      })
    .catch((error) => console.error(error));
}

    return (
      <div>
        <div>
          <h2>Registration</h2>
          <label>Username</label>
          <input type="text" onChange={handleUsernameReg} />
          <label> Password</label>
          <input onChange= {handlePasswordReg}type="password"
           placeholder="Password" />
          <button onClick ={register}>Register</button>
        </div>
        <div className="Login">
          <h2> Login </h2>
          <input type="text" placeholder="Username.."/>
          <input type="password" placeholder="Password"/>
          <button>Login</button>
        </div>
      </div>
    );
}

export default AllLoginFiles
