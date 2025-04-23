import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Survey1 from "./components/survey_form/survey_1";
import Survey2 from "./components/survey_form/survey_2";
import Survey3 from "./components/survey_form/survey_3";
import Blog from "./components/Navbar/Blog";
import FAQ from "./components/Navbar/Faq";
import ContactUs from "./components/Navbar/ContactUs";
import MainPage from "./components/Service_page/MainPage";
import Table from "./components/Service_page/Table";
import Dashboard from "./components/Dashboard/Dashboard";
import EducateYourselfPage from "./components/Navbar/EducateYourselfPage";
import ExpertTeam from "./components/Navbar/expert";
import MainContent from "./components/Home/MainContent";
import MotivationalCards from "./components/Cards/MotivationalCards";
import GameCards from "./components/Cards/GameCards";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/normal_user" element={<Survey1 />} />
        <Route path="/survey/student" element={<Survey2 />} />
        <Route path="/survey/professional" element={<Survey3 />} />
        <Route path="/expertblog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<MainPage />} />
        <Route path="/table" element={<Table />} />
        <Route path="/survey/normal_user/dashboard_1" element={<Dashboard />} />
        <Route path="/educateyourself" element={<EducateYourselfPage />} />
        <Route path="/expert" element={<ExpertTeam />} />
        <Route path="/main" element={<MainContent />} />
        <Route path="/c1" element={<MotivationalCards />} />
        <Route path="/c2" element={<GameCards />} />
      </Routes>
    </Router>
  );
}

export default App;
