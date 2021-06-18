import React, { useState } from "react";
const RegistrationForm = ({student}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  function passwordMatch(e) {
    if (confirmPassword !== password) {
      alert("Password doesn't match");
    } else {
      setConfirmPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      password === isValid &&
      password.length > 8 &&
      !password.includes(" ")
    ) {
      setIsValid(true);
      //sendDetailsToServer();
    } else {
      setIsValid(false);
      alert("password not valid");
    }
  }
  return (
    <div className="Form">
      <h1>Registration</h1>
      <Header />
      <form className="root" onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <h3>
            password is longer than 8 characters and does not include any spaces
          </h3>
          Create Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={passwordMatch}
          />
        </label>
        <p>{`Password is ${isValid ? "" : "not "} valid`}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default RegistrationForm;
