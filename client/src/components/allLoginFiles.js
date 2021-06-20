import React, {useState} from 'react'

const AllLoginFiles = () => {
  const [firstNameReg, setFirstNameReg] = useState("")
  const [lastNameReg, setLastNameReg] = useState("");
   const [emailReg, setEmailReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("");
  const [cityReg, setCityReg] = useState("");
  const [countryReg, setCountryReg] = useState("");
 
const handleFirstNameReg = (event)=>{
const registrationFirstName= event.target.value;
setFirstNameReg(registrationFirstName);

}
const handleLastNameReg = (event)=>{
const registrationLastName= event.target.value;
setLastNameReg(registrationLastName);

}

const handleEmailReg = (event)=>{
const registrationFirstName= event.target.value;
setEmailReg(registrationFirstName);
}

const handlePasswordReg = (event) => {
const regPassword = event.target.value;
setPasswordReg(regPassword);
   
};
const handleCityReg = (event) => {
  const regCity = event.target.value;
  setCityReg(regCity);
};
const handleCountryReg = (event) => {
  const regCountry = event.target.value;
  setCountryReg(regCountry);
};

//handles data got from the client and sent to the backend
const getRegData = {
  firstName: firstNameReg,
  lastName: lastNameReg,
  email: emailReg,
  password: passwordReg,
  city: cityReg,
  country: countryReg
}
const register = ()=>{
   fetch("http://localhost:3100/api/register", {
     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json",
     },
     body: JSON.stringify(getRegData),
   })
     .then((response) => {
       console.log(response.json());
     })
     .catch((error) => console.error(error));
  }

    return (
      <div>
        <div>
          <h2>Registration</h2>
          <label>First Name</label>
          <input type="text" onChange={handleFirstNameReg} />
          <label>Last Name</label>
          <input type="text" onChange={handleLastNameReg} />
          <label>Email</label>
          <input type="text" onChange={handleEmailReg} />
          <label>City</label>
          <input type="text" onChange={handleCityReg} />
          <label>Country</label>
          <input type="text" onChange={handleCountryReg} />
          <label> Password</label>
          <input onChange={handlePasswordReg} type="password"
            placeholder="Password"
          />
          <button onClick={register}>Register</button>
        </div>
        <div className="Login">
          <h2> Login </h2>
          <input type="text" placeholder="Username.." />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </div>
      </div>
    );
}

export default AllLoginFiles
