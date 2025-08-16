import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CVPreview.css";

export default function CVPreview() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p className="cv-message">No CV Data Found. Please go back and fill the form.</p>;
  }

  return (
    <div className="cv-preview">
      {/* Profile Header */}
      <div className="cv-header">
        {state.profilePic && (
          <img
            src={state.profilePic}
            alt="Profile"
          />
        )}
        <div>
          <h2>{state.name}</h2>
          <p>{state.email} | {state.phone}</p>
          <p>
            <a href={state.github} target="_blank" rel="noopener noreferrer">
              {state.github}
            </a>
          </p>
        </div>
      </div>

      {/* Sections */}
      <section>
        <h3>Professional Summary</h3>
        <p>{state.summary}</p>
      </section>

      <section>
        <h3>Education</h3>
        <p>{state.education}</p>
      </section>

      <section>
        <h3>Experience</h3>
        <p>{state.experience}</p>
      </section>

      <section>
        <h3>Skills</h3>
        <p>{state.skills}</p>
      </section>

      <section>
        <h3>Projects</h3>
        <p>{state.projects}</p>
      </section>

      {/* Back Button */}
      <button onClick={() => navigate("/")}>Back to Form</button>
    </div>
  );
}
