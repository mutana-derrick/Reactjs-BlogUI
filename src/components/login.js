import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/login.css"; // Import the CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { username, password });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/";
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="text-center">
          Login <i className="fa-solid fa-user-tie"></i>
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
        <button type="submit" className="btn btn-dark btn-block">
          Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <div className="text-center mt-3">
          No account?{" "}
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
