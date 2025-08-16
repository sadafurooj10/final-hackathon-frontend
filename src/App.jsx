import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupLoginForm from "./components/SignupLoginForm";
import CVBuilder from "./components/CVBuilder";
import CVPreview from "./components/CVPreview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupLoginForm />} />
        <Route path="/cv-builder" element={<CVBuilder />} />
        <Route path="/cv-preview" element={<CVPreview />} />
      </Routes>
    </Router>
  );
}

export default App;
