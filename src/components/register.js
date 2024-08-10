import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const validateUsername = (username) => {
    return username.length >= 3;
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!validateUsername(username)) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 6 characters long and include at least one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log({ username, password });
    setError(null);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="text-center">
          Register <i className="fa-solid fa-user-plus"></i>
        </h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark btn-block">
          Register <i className="fa-solid fa-user-plus"></i>
        </button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <div className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
