import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://statecouncil-back-end-production.up.railway.app/Login",
        {
          email,
          password,
        }
      );

      if (res.data.success) {
        alert("Login successful!");

        window.location.href = "/";
      } else {
        alert("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">الدخول</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-columns">
            <div className="form-column">
              <div className="input-group">
                <FaEnvelope className="icon" />
                <label htmlFor="email">البريد الالكتروني</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <FaLock className="icon" />
                <label htmlFor="password">كلمة المرور</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
            </div>
          </div>
          <div className="register-link">
            <p>
              ليس لديك حساب؟ <Link to="/Signup">انشاء حساب</Link>
            </p>
          </div>
          <button
            type="submit"
            className="submit-button"
            // onClick={() => (window.location.href = "/")}
          >
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
