import React, { useState } from "react";
import "./Login.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && (!name || !phone))) {
      setMessage("Please fill all fields.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {

      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setMessage("Login successful!");
      } else {
        setMessage("Invalid credentials.");
      }
    } else {
    
      const userExists = users.some((user) => user.email === email);
      if (userExists) {
        setMessage("User already exists!");
      } else {
        users.push({ name, email, password, phone });
        localStorage.setItem("users", JSON.stringify(users));
        setMessage("Signup successful! Please login.");
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          {!isLogin && (
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="btn">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <button onClick={toggleForm} className="toggle-btn">
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
