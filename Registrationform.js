import React, { useState } from "react";
import './Registrationform.css';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showDetails, setShowDetails] = useState(false);
  const namePattern = /^[a-zA-Z]+(?:-[a-zA-Z]+)?(?: [a-zA-Z]+)?$/;
  const phonePattern =/^[0-9]{10}$/; // Assumes a 10-digit phone number format

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple password validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simple password validation
    if (!namePattern.test(firstName)) {
      alert("First name should contain only letters.");
      return;
    }

    if (!namePattern.test(lastName)) {
      alert("Last name should contain only letters.");
      return;
    }
    if (!phonePattern.test(phoneNumber)) {
        alert("Invalid phone number. Please enter a 10-digit number.");
        return;
      }
  
      // Simple email validation (using HTML5 type attribute)
      if (!email.includes('@') || !email.includes('.')) {
        alert("Invalid email address.");
        return;
      }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Simple password confirmation validation
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    setShowDetails(true);
  };

  return (
    <div className="registration-form">
      <h1>User Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            pattern={namePattern.source}
            title="Only letters, hyphens, and spaces are allowed."
          />
        </label>

  
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            pattern={namePattern.source}
            title="Only letters, hyphens, and spaces are allowed."
          />
        </label>

         <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

      
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            pattern={phonePattern.source}
            title="Please enter a 10-digit phone number."
          />
        </label>

       
        <label>
          Set Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

       
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>

        <br />

        <button type="submit">Register</button>
      </form>

      {showDetails && (
        <div className="form-details">
          <h2>Form Details:</h2>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Password: {"*".repeat(password.length)}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
