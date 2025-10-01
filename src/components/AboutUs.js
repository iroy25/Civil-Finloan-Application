import React from "react";
import Navbar from './Navbar';
import Footer from "./Footer";
import { Link } from "react-router-dom"; 

const AboutUs = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <div className="container py-5 mt-5">
  <div className="row align-items-center">
    
    
    <div className="col-md-6 text-start">
      <h2 className="text-3xl font-bold text-teal-600 mb-4">
        About Us
      </h2>
      <p className="text-gray-700 mb-3">
        Civil-Finloan is a finance management company which provides an extensive array of services including loans to citizens, money transfers, wealth management, and micro-loans to agriculture and small businesses in rural areas.
      </p>
      <Link to="/" className="btn btn-warning mt-3 text-white fw-bold">
        Explore Home
      </Link>
    </div>

    
    <div className="col-md-6 text-center">
      <img
        src="loan-calculator.png"
        alt="About Us"
        className="img-fluid rounded shadow"
        style={{ maxHeight: "300px", width: "auto" }}
      />
    </div>

  </div>
</div>

      <Footer />
    </>
  );
};

export default AboutUs;
