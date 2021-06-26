import React, { useState } from "react";

const TeacherRegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function passwordMatch(e) {
    setConfirmPassword(e.target.value);

    if (e.target.value !== password) {
      setError("Password doesn't match");
    } else {
      setError("");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        city,
        country,
      };
      callAPI(newUser);
    }

    if (confirmPassword !== password) {
      alert("Password doesn't match");
    } else {
      setConfirmPassword(e.target.value);
    }
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      city,
      country,
    };
    const res = await fetch("http://localhost:3100/api/register/teachers", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (
      password === isValid &&
      password.length > 8 &&
      !password.includes(" ")
    ) {
      setIsValid(true);
      //sendDetailsToServer();
    } else {
      setIsValid(false);
      // alert("password not valid");
    }
  }
  return (
    <div className="Form">
      <h1>Registration</h1>
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
          City
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <label>
          Country
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <h3>Please select the appropriate box</h3>

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
        {/* <p>{`Password is ${isValid ? "" : "not "} valid`}</p> */}
        <button type="submit">Register</button>
      </form>
      {
        error ? <h3>{error}</h3> : null // if password matches then you will call set error
      }
    </div>
  );
};
export default TeacherRegistrationForm;
