import React, { useState } from "react";
import { FaUser, FaIdCard, FaEnvelope, FaLock, FaUpload } from "react-icons/fa";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    nationalID: "",
    lawyerID: "",
    email: "",
    password: "",
    confirmPassword: "",
    personalPhoto: null,
    idPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    try {
      const res = await axios.post(
        "http://localhost:3001/Signup",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server Response:", res.data);

      if (res.data.success) {
        console.log(formPayload);
        window.location.href = "/Login";
      } else {
        alert("Signup failed.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong during signup.");
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">التسجيل</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-columns">
            <div className="form-column">
              <div className="input-group">
                <FaIdCard className="icon" />
                <input
                  type="text"
                  name="nationalID"
                  placeholder="الرقم القومي"
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <FaLock className="icon" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="تأكيد كلمة المرور"
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group file-up">
                <FaUpload className="icon" />
                <label>رفع صورة بطاقة الرقم القومي</label>
                <input
                  type="file"
                  id="idPhoto"
                  name="idPhoto"
                  onChange={handleFileChange}
                  required
                  className="file-input"
                />
              </div>
            </div>
            <div className="form-column">
              <div className="input-group">
                <FaUser className="icon" />
                <input
                  type="text"
                  name="username"
                  placeholder="اسم المستخدم"
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <FaIdCard className="icon" />
                <input
                  type="text"
                  name="lawyerID"
                  placeholder="الرقم النقابي"
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <FaLock className="icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="كلمة المرور"
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-group file-up">
                <FaUpload className="icon" />
                <label>رفع صورة بطاقة المحامي</label>
                <input
                  type="file"
                  id="personalPhoto"
                  name="personalPhoto"
                  onChange={handleFileChange}
                  required
                  className="file-input"
                />
              </div>
            </div>
          </div>

          <button
            className="submit-button"
            // onClick={() => (window.location.href = "/Login")}
          >
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
