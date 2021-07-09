import React from "react";


const Validation = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "First name is required.";
  } else if (values.firstName.toString().trim().length === 0) {
    errors.firstName = "Valid first name is required.";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required.";
  } else if (values.lastName.toString().trim().length === 0) {
    errors.lastName = "Valid last name is required.";
  }
  if (!values.city) {
    errors.city = "City is required.";
  } else if (values.city.toString().trim().length === 0) {
    errors.name = "Valid city name is required.";
  }
  if (!values.country) {
    errors.country = "country is required.";
  } else if (values.country.toString().trim().length === 0) {
    errors.country = "Valid country name is required.";
  }
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid.";
  }
  if (!values.email2) {
    errors.email2 = "Email is required";
  } else if (values.email2 !== values.email) {
    errors.email2 = "Emails do not match";
  }
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more than five characters.";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  if (!values.role) {
    errors.role = "Please select an option.";
  }

  return errors;
};
export default Validation;
