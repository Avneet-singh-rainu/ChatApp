import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const initialFormState = {
  username: "",
  password: "",
};

function LoginPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    navigate("chat", { state: { user: formData.username } });
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setFormData(initialFormState);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h1>Welcome, {formData.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
