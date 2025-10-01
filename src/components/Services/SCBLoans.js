import React from "react";
import Navbar from '../Navbar';
import Footer from "../Footer";

const SCBLoans = ( {user}) => {
  return (
    <>
    <Navbar user={user} />
    <div className="container py-5 mt-5">
      <h1 className="text-3xl font-bold text-teal-600 mb-4">Small Scale Business Loans</h1>

      <p className="lead">
        Providing loans which designed for your aspirations in starting a business
      </p>

      <div className="mt-5">
        <h5>Type: DI Loan</h5>
        <ul>
          <li>Minimum Amount: ₹ 15000</li>
          <li>Maximum Amount: ₹ 100000</li>
          <li>Tenure: 150 (days/month)</li>
        </ul>
      </div>

      <div className="mt-4">
        <h5>Type: MI Loan</h5>
        <ul>
          <li>Minimum Amount: ₹ 100000</li>
          <li>Maximum Amount: ₹ 300000</li>
          <li>Tenure: 34 (days/month)</li>
        </ul>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SCBLoans;
