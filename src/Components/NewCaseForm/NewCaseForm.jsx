// new_case_form.jsx
import React, { useState } from "react";
import "./NewCaseForm.css";
import axios from "axios";

const NewCaseForm = () => {
  const [formData, setFormData] = useState({
    court_name: "",
    plaintiff_Name: "",
    national_ID: "",
    concerned_Authority: "",
    Email: "",
    case_Type: "",
    documents: null,
    Incident_Location: "",
    case_description: "",
    agree: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };
  const handleCheckbox = (e) => {
    setFormData({ ...formData, agree: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });
    try {
      const res = await axios.post(
        "https://statecouncil-back-end-production.up.railway.app/NewCaseForm",
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Case Form Response:", res.data);

      if (res.status === 200) {
        
        // window.location.href = "/";
      } else {
        alert("Failed to submit case.");
      }
    } catch (err) {
      console.error("Case Submit Error:", err);
      alert("Something went wrong during case submission.");
    }
  };
  return (
    <div className="form-container">
      <div className="form-box">
        <h2>تقديم قضية جديدة</h2>
        <form onSubmit={handleSubmit} className="case-form" method="post">
          <select
            className="form-input"
            name="court_name"
            onChange={handleChange}
          >
            <option value="">اختر نوع المحكمة</option>
            <option value="administrative_high">المحكمة الإدارية العليا</option>
            <option value="administrative_council">محكمة القضاء الإداري</option>
            <option value="administrative_courts">المحاكم الإدارية</option>
            <option value="disciplinary_courts">المحاكم التأديبية</option>
          </select>

          <div className="form-row">
            <input
              type="text"
              placeholder="اسم المدعي"
              className="form-input"
              name="plaintiff_Name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="الجهة المعنية"
              className="form-input"
              name="concerned_Authority"
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="رقم الهوية الوطنية"
              className="form-input"
              name="national_ID"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="نوع القضية"
              className="form-input"
              name="case_Type"
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="form-input"
              name="Email"
              onChange={handleChange}
            />
            <div className="form-input file-upload">
              <label htmlFor="file"> رفع مستندات</label>
              <input
                type="file"
                id="file"
                name="documents"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="موقع الحدث"
              className="form-input"
              name="Incident_Location"
              onChange={handleChange}
            />
          </div>

          <textarea
            placeholder="تفاصيل القضية"
            className="form-textarea"
            name="case_description"
            onChange={handleChange}
          ></textarea>

          <div className="form-checkbox">
            <input
              type="checkbox"
              id="agree"
              onChange={handleCheckbox}
              required
            />
            <label htmlFor="agree">
              أقر أن جميع البيانات والمستندات التي قدمتها صحيحة وعلى مسؤوليتي
              الكاملة
            </label>
          </div>

          <button
            className="submit-button"
            // onClick={() => (window.location.href = "/")}
          >
            إرسال القضية
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCaseForm;
