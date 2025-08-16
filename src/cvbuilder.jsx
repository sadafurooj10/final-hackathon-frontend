import React, { useState } from "react";
import "./App.css";

function CvBuilder() {
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <h2>CV Builder</h2>

      {profilePic && (
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <form>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Phone Number" required />
        <textarea placeholder="About Me" rows="4"></textarea>
        <input type="text" placeholder="Skills (e.g. HTML, CSS, JS)" />
        <input type="url" placeholder="GitHub Profile Link" />
        <input type="url" placeholder="LinkedIn Profile Link" />
        <button type="submit">Save CV</button>
      </form>
    </div>
  );
}

export default CvBuilder;
