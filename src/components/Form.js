
import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  // State for tracking form submission and validation errors
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validation logic
    const validationErrors = [];
    if (firstName.trim() === "") {
      validationErrors.push("First name is required.");
    }
    if (lastName.trim() === "") {
      validationErrors.push("Last name is required.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors([]);
      setSubmitted(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>

      {/* Display validation errors */}
      {errors.map((error, index) => (
        <p key={index} style={{ color: "red" }}>
          {error}
        </p>
      ))}

      {/* Display submission status */}
      {submitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
    </form>
  );
}

export default Form;
