import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupLoginForm.css";

const SignupLoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isLogin) {
      // 🔹 Login flow
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser && savedUser.email === email && savedUser.password === password) {
        alert("Login successful ✅");
        navigate("/cv-builder");
      } else {
        alert("Invalid email or password ❌");
      }
    } else {
      // 🔹 Signup flow
      if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
      }
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      alert("Signup successful ✅ Now please login");
      setIsLogin(true); // switch to login form
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {!isLogin && (
          <div className="input-box">
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input-box">
          <i className="fa fa-envelope"></i>
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-box">
          <i className="fa fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="btn-box">
          <button
            className={`btn-primary ${isLogin ? "btn-secondary" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
          <button
            className={`btn-primary ${!isLogin ? "btn-secondary" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
        </div>

        <div style={{ marginTop: "15px" }}>
          <button className="btn-primary" onClick={handleSubmit}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupLoginForm;
