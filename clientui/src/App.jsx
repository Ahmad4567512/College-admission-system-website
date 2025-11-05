import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Stdfrom from "./Screens/Stdfrom";
import Applicant from "./Screens/Applicant";
import Programmes from "./Components/Programmes";
import Activities from "./Components/Activities";
import AboutUs from "./Components/Aboutus";
import ContactUs from "./Components/Contactus";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/student-form" element={<Stdfrom />} />
        <Route path="/apply-course" element={<Applicant />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </Router>
  );
};

export default App;
