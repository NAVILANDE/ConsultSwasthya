import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Survey1 from "./components/survey_form/survey_1";
import Survey2 from "./components/survey_form/survey_2";
import Survey3 from "./components/survey_form/survey_3";
import Blog from "./components/Navbar/blog";
import FAQ from "./components/Navbar/Faq";
import ContactUs from "./components/Navbar/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/normal_user" element={<Survey1 />} />
        <Route path="/survey/student" element={<Survey2 />} />
        <Route path="/survey/professional" element={<Survey3 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
