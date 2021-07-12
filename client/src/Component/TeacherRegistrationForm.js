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
      const link = values.role === "teacher" ? "/api/register-teacher" : "/api/student-register"
      fetch( link, {
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
        <AccountSuccess role={values.role} />
      ) : (
        <div className="signUp-container">
          {/* <div className="header">
            <h2>Sign up</h2>
          </div> */}
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
                {errors.firstName && (
                  <p className="error">{errors.firstName}</p>
                )}
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
                  className="s-input-e"
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
                  className="s-input-confirm-e"
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
                {errors.password2 && (
                  <p className="error">{errors.password2}</p>
                )}
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
              <div className= "btn-container">
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
              Teacher Login
            </Link>
            <Link className="login-link" to="/student-login">
              Student Login
            </Link>
          </p>
        </div>
        </div>
      )}
    </div>
  );
};
export default TeacherRegistration;
