import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CVBuilder.css";  // custom css import

export default function CVBuilder() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    skills: "",
    summary: "",
    education: "",
    experience: "",
    projects: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic") {
      setFormData({ ...formData, profilePic: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cv-preview", { state: formData });
  };

  return (
    <div className="cv-builder">
      <h2>CV Builder</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="github" placeholder="GitHub Profile" onChange={handleChange} />

        <textarea name="summary" placeholder="Professional Summary" onChange={handleChange}></textarea>
        <textarea name="education" placeholder="Education" onChange={handleChange}></textarea>
        <textarea name="experience" placeholder="Experience" onChange={handleChange}></textarea>
        <textarea name="skills" placeholder="Skills (comma separated)" onChange={handleChange}></textarea>
        <textarea name="projects" placeholder="Projects" onChange={handleChange}></textarea>

        <label>
          Upload Profile Picture:
          <input type="file" name="profilePic" accept="image/*" onChange={handleChange} />
        </label>

        <button type="submit">Generate CV</button>
      </form>
    </div>
  );
}
