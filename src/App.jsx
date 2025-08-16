import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CvBuilder from "./cvbuilder"; // ✅ file ka sahi naam
import "./App.css";
// ----------------- Login Component -----------------
function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/cv-builder");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}

// ----------------- Signup Component -----------------
function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Full Name" required />
        <br />
        <input type="email" placeholder="Email" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
}

// ----------------- Main App -----------------
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cv-builder" element={<CvBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
