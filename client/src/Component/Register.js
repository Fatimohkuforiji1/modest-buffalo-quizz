<<<<<<< HEAD
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

  // function passwordMatch(e) {
  // }

  function passwordMatch(e) {
    setConfirmPassword(e.target.value);

    if (e.target.value !== password) {
      setError("Password doesn't match");
    } else {
      setError("");
    }
  }

  function validate() {}

  function callAPI() {}

  async function handleSubmit(e) {
    e.preventDefault();
<<<<<<< HEAD:client/src/Component/Register.js
=======
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
>>>>>>> master:client/src/Component/TeacherRegistrationForm.js
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      city,
      country,
    };
<<<<<<< HEAD:client/src/Component/Register.js
    console.log(student);
    const res = await fetch("http://localhost:3100/api/register", {
=======
    const res = await fetch("http://localhost:3100/api/register/teachers", {
>>>>>>> master:client/src/Component/TeacherRegistrationForm.js
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    });
<<<<<<< HEAD:client/src/Component/Register.js
    console.log(res);
=======
>>>>>>> master:client/src/Component/TeacherRegistrationForm.js
    if (
      password === isValid &&
      password.length > 8 &&
      !password.includes(" ")
    ) {
      setIsValid(true);
      sendDetailsToServer();
    } else {
      setIsValid(false);
      alert("password not valid");
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
<<<<<<< HEAD:client/src/Component/Register.js
        <label>
          Student
          <input
            type="checkbox"
            name="student"
            value={student}
            onChange={(e) => setStudent(e.target.name)}
          />
        </label>
        <label>
          Teacher
          <input
            type="checkbox"
            name="Teacher"
            value={teacher}
            onChange={(e) => setTeacher(e.target.className)}
          />
        </label>
=======
>>>>>>> master:client/src/Component/TeacherRegistrationForm.js

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
      {
        error ? <h3>{error}</h3> : null // if password matches then you will call set error
      }
    </div>
  );
};
<<<<<<< HEAD:client/src/Component/Register.js
export default RegistrationForm;
=======
export default TeacherRegistrationForm;
>>>>>>> master:client/src/Component/TeacherRegistrationForm.js
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Form,Col} from "react-bootstrap";

const Register = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>
      
      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
>>>>>>> master
