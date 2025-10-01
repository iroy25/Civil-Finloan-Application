import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import UpdateProfile from "./components/UpdateProfile";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import EMICalculator from "./components/Emi_Cal";
import AboutUs from "./components/AboutUs";

import SCBLoans from "./components/Services/SCBLoans";
import MRLoans from "./components/Services/MR";
import MicroFin from "./components/Services/MF";
import WealthManagement from "./components/Services/WM";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/emical" element={<EMICalculator />} />


          <Route path="/scb" element={<SCBLoans />} />
          <Route path="/mr" element={<MRLoans />} />
          <Route path="/wm" element={<WealthManagement />} />
          <Route path="/mf" element={<MicroFin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
