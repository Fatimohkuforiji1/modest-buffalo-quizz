import React, { useState, useEffect } from "react";

const StudentRegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [groups, setGroups] = useState([]);
  const [groupsId, setGroupsId] = useState("");
 
  function passwordMatch(e) {
    setConfirmPassword(e.target.value);

    if (e.target.value !== password) {
      setError("Password doesn't match");
    } else {
      setError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (confirmPassword !== password) {
      alert("Password doesn't match");
      return;
    }
   
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      groupsId,
      city,
      country,
    };

    console.log(newUser);
    fetch("http://localhost:3100/api/register/students", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(data => {
      console.log(data); // data.rows[0].id
      //const id = data.rows[0].id;
      
    });

  
  }

  useEffect(() => {
    fetch("http://localhost:3100/api/groups")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("There is an error with the service");
        }
      })
      .then((data) => {
        setGroups(data);
        setGroupsId(data[0].id);
      })
      .catch((e) => console.log(e));
  }, []);

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

        <label>
         
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
        <label>Choose a group:</label>
        <select
          id="groups"
          name="groups"
          onChange={(e) => setGroupsId(e.target.value)}
        >
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.group_name}
            </option>
          ))}
        </select>
        <button type="submit">Register</button>
      </form>
      {
        error ? <h3>{error}</h3> : null // if password matches then you will call set error
      }
    </div>
  );
};
export default StudentRegistrationForm;
