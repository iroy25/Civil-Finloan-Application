import React from "react";
import Navbar from '../Navbar';
import Footer from "../Footer";

const MicroFin = ( {user}) => {
  return (
    <>
    <Navbar user={user} />
    <div className="container py-5 mt-5">
      <h1 className="text-3xl font-bold text-teal-600 mb-4">Micro Finance</h1>

      <p className="lead">
      Motivate the entrepreneurs across all small villages and rural areas by providing them a better support
      </p>

      <div className="mt-5">
        <h5>Type: NA</h5>
        <ul>
          <li>Minimum Amount: ₹ 100</li>
          <li>Maximum Amount: ₹ 3500</li>
          <li>Tenure: 2 (days/month)</li>
        </ul>
      </div>

    </div>
    <Footer />
    </>
  );
};

export default MicroFin;
