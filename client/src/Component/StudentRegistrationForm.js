import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StudentRegistrationForm = () => {
  // let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
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
    } else {
      setConfirmPassword(e.target.value);
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
    fetch("/api/student-register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => {
      console.log(data); // data.rows[0].id
      //const id = data.rows[0].id;
    });

    /* get the id then redirect to the student dashboard passing the id across */
    // if (
    //   password === isValid &&
    //   password.length > 8 &&
    //   !password.includes(" ")
    // ) {
    //   setIsValid(true);
    // } else {
    //   setIsValid(false);
    // }
  }

  useEffect(() => {
    fetch("/api/groups")
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
console.log(groups);
  return (
    <div className="signUp-container">
      <div className="signUp-wrapper">
        <div>
          <h2 className="signUp-title">Create Account</h2>
        </div>

        <form className="signUp-form" onSubmit={handleSubmit}>
          <label className="s-name"> </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First name"
            className="s-input-n"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="s-name"></label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            className="s-input-n"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="s-email"></label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            className="s-input-n"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="s-name"></label>
          <input
            type="text"
            name="city"
            className="s-input-n"
            value={city}
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />

          <label className="s-name"></label>
          <input
            type="text"
            name="country"
            value={country}
            className="s-input-n"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />

          <label className="s-password"></label>
          {/* <h3>
            password is longer than 8 characters and does not include any spaces
          </h3> */}
          <input
            type="password"
            name="password"
            value={password}
            className="s-input-n"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label></label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            className="s-input-n"
            onChange={passwordMatch}
          />

          <label>Choose a group:</label>
          <select
            className="select_option"
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
      </div>
      <div>
        <p className="login-info">
          Already have an account.
          <Link className="login-link" to="/student-login">
            Login
          </Link>
        </p>
      </div>
      {
        error ? <h3>{error}</h3> : null // if password matches then you will call set error
      }
    </div>
  );
};
export default StudentRegistrationForm;
