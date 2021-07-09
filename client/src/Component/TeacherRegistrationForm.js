import React, { useState, useEffect } from "react";
import Validate from "./Validate";
import { Link } from "react-router-dom";
import AccountSuccess from "./AccountSuccess";

// import logo from "./Images/cyf_logo.jpeg";

const TeacherRegistration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [region, setRegion] = useState([]);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    email: "",
    email2: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  //fetch data
  //   useEffect(()=> {
  //   fetch("/api/regions")
  //       .then((res) => res.json())
  //       .then((region) => setRegion(region));
  // },[])
  // const localUrl = "http://127.0.0.1:3000/";
  // const prodUrl = "/";
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(Validate(values));
    setErrors(Validate(values));
    if (Object.keys(Validate(values)).length === 0) {
      fetch("/api/register/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((result) => result.json())
        .then((res) => {
          console.log(res);
          if (res.message === "Account created") {
            setIsSubmitted(true);
          } else {
            setIsSubmitted(false);
          }
        });
    } else {
      setIsSubmitted(false);
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div>
      {isSubmitted ? (
        <AccountSuccess />
      ) : (
        <div className="signUp-container">
          <div className="signUp-wrapper">
            <div>
              <h2 className="signUp-title">Create Account</h2>
            </div>
            {isSubmitted === "err" && <p>Unsuccessful. Please try again.</p>}
            <form
              className="signUp-form"
              action="/"
              method="POST"
              autoComplete="off"
            >
              {/* <div> */}
              <label className="s-name" htmlFor="name"></label>
              <input
                id="fName"
                onChange={handleChange}
                className="s-input-n"
                type="text"
                name="firstName"
                value={values.firstName}
                placeholder="First name"
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
              {/* </div> */}
              {/* <div> */}
              <label className="s-name" htmlFor="name"></label>
              <input
                id="lName"
                onChange={handleChange}
                className="s-input-n"
                type="text"
                name="lastName"
                value={values.lastName}
                placeholder="Last name"
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
              {/* </div> */}
              {/* <div> */}
              <label className="s-name" htmlFor="name"></label>
              <input
                id="city"
                onChange={handleChange}
                className="s-input-n"
                type="text"
                name="city"
                value={values.city}
                placeholder="City"
              />
              {errors.city && <p className="error">{errors.city}</p>}
              {/* </div> */}
              {/* <div> */}
              <label className="s-name" htmlFor="name"></label>
              <input
                id="country"
                onChange={handleChange}
                className="s-input-n"
                type="text"
                name="country"
                value={values.country}
                placeholder="Country"
              />
              {errors.country && <p className="error">{errors.country}</p>}
              {/* </div> */}
              {/* <div> */}
              <label htmlFor="email" className="s-email"></label>
              <input
                id="email"
                onChange={handleChange}
                className="s-input-n"
                type="email"
                name="email"
                value={values.email}
                placeholder="Email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
              {/* </div> */}
              {/* <div> */}
              <label htmlFor="email2" className="s-confirm-e"></label>
              <input
                id="email2"
                onChange={handleChange}
                className="s-input-n"
                type="email2"
                name="email2"
                value={values.email2}
                placeholder="Confirm Email"
              />
              {errors.email2 && <p className="error">{errors.email2}</p>}
              {/* </div> */}
              {/* <div> */}
              <label htmlFor="password" className="s-password"></label>
              <input
                id="password"
                onChange={handleChange}
                className="s-input-n"
                type="password"
                name="password"
                value={values.password}
                placeholder="Password"
              />
              {errors.password && <p className="error">{errors.password}</p>}
              {/* </div> */}
              {/* <div> */}
              <label htmlFor="password2" className="s-confirm-p"></label>
              <input
                id="password2"
                onChange={handleChange}
                className="s-input-n"
                type="password"
                name="password2"
                value={values.password2}
                placeholder="Confirm Password"
              />
              {errors.password2 && <p className="error">{errors.password2}</p>}
              {/* </div> */}
              <div className="sign-up-dropdown">
                {/* <div> */}
                <select
                  className="select_option"
                  name="role"
                  onChange={handleChange}
                >
                  <option>Select Role</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
                {errors.role && <p className="error">{errors.role}</p>}
                {/* </div> */}
                {/* <div>
                  <select name="region" onChange={handleChange}>
                    <option>Select Region</option>
                    {region.map((r, index) => (
                      <option key={index} value={r.location}>
                        {r.location}
                      </option>
                    ))}
                  </select>
                  {errors.region && <p className="error">{errors.region}</p>}
                </div> */}
              </div>
              <div className="btn-container">
                <Link className="link-home" to="/">
                  Cancel
                </Link>
                <button
                  className="signUp-btn"
                  type="submit"
                  onClick={handleFormSubmit}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="login-btn-wrapper">
            <p className="login-info">
              Already have an account? &nbsp;
              
              <Link className="login-link" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default TeacherRegistration;

// import React, { useState } from "react";

// const TeacherRegistrationForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");
//   const [password, setPassword] = useState("");
//   const [isValid, setIsValid] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   function passwordMatch(e) {
//     setConfirmPassword(e.target.value);

//     if (e.target.value !== password) {
//       setError("Password doesn't match");
//     } else {
//       setError("");
//     }
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (validate()) {
//       const newUser = {
//         firstName,
//         lastName,
//         email,
//         password,
//         city,
//         country,
//       };
//       callAPI(newUser);
//     }

//     if (confirmPassword !== password) {
//       alert("Password doesn't match");
//     } else {
//       setConfirmPassword(e.target.value);
//     }
//     const newUser = {
//       firstName,
//       lastName,
//       email,
//       password,
//       city,
//       country,
//     };
//     const res = await fetch("http://localhost:3100/api/teachers", {
//       method: "POST",
//       body: JSON.stringify(newUser),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });
//     if (
//       password === isValid &&
//       password.length > 8 &&
//       !password.includes(" ")
//     ) {
//       setIsValid(true);
//       sendDetailsToServer();
//     } else {
//       setIsValid(false);
//       alert("password not valid");
//     }
//   }
//   return (
//     <div className="Form">
//       <h1>Registration</h1>
//       <form className="root" onSubmit={handleSubmit}>
//         <label>
//           First Name
//           <input
//             type="text"
//             name="name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </label>
//         <label>
//           Last Name
//           <input
//             type="text"
//             name="last name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label>
//           City
//           <input
//             type="text"
//             name="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </label>

//         <label>
//           Country
//           <input
//             type="text"
//             name="country"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           />
//         </label>
//         <h3>Please select the appropriate box</h3>

//         <label>
//           <h3>
//             password is longer than 8 characters and does not include any spaces
//           </h3>
//           Create Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <label>
//           Confirm Password
//           <input
//             type="password"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={passwordMatch}
//           />
//         </label>
//         <p>{`Password is ${isValid ? "" : "not "} valid`}</p>
//         <button type="submit">Register</button>
//       </form>
//       {
//         error ? <h3>{error}</h3> : null // if password matches then you will call set error
//       }
//     </div>
//   );
// };
// export default TeacherRegistrationForm;
