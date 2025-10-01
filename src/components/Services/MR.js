import React from "react";
import Navbar from '../Navbar';
import Footer from "../Footer";

const MRLoans = ( {user}) => {
  return (
    <>
    <Navbar user={user} />
    <div className="container py-5 mt-5">
      <h1 className="text-3xl font-bold text-teal-600 mb-4">Money Remittance</h1>

      <p className="lead">
      Secure, simple and most exciting way of your transactions to inter and intra regions
      </p>

      <div className="mt-5">
        <h5>Type: Domestic</h5>
        <ul>
          <li>Minimum Amount: ₹ 2500</li>
          <li>Maximum Amount: ₹ 25000</li>
          <li>Tenure: NA (days/month)</li>
        </ul>
      </div>

      <div className="mt-4">
        <h5>Type: Inward</h5>
        <ul>
          <li>Minimum Amount: ₹ 5000</li>
          <li>Maximum Amount: ₹ 10000</li>
          <li>Tenure: NA (days/month)</li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MRLoans;
