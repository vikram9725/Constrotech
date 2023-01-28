import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import LoginHome from "./Component/LoginHome";
import ContactUs from "./Component/ContactUs";
import About from "./Component/About";
import Registerform from "./Component/Subcomponent/Registerform";
import LoginForm from "./Component/Subcomponent/LoginForm";
import Project from "./Component/Project";
import Ourservices1 from "./Component/Ourservices";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginHome" element={<LoginHome/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/register" element={<Registerform/>}></Route>
          <Route path="/Project" element={<Project/>}></Route>          
          <Route path="/LoginForm" element={<LoginForm/>}></Route>
          <Route path="/services" element={<Ourservices1/>}></Route>  


        </Routes>
      </Router>
    </div>
  );
}
export default App;






