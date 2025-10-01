import React from "react";
import Navbar from '../Navbar';
import Footer from "../Footer";

const WealthManagement = ( {user}) => {
  return (
    <>
    <Navbar user={user} />
    <div className="container py-5 mt-5">
      <h1 className="text-3xl font-bold text-teal-600 mb-4">Wealth Management</h1>

      <p className="lead">
      We are providing significant services for your betterment of your wealth management by experts
      </p>

      <div className="mt-5">
        <ul>
          <li>DEMAT</li>
          <li>PAN</li>
          <li>NPS</li>
        </ul>
      </div>

    </div>
    <Footer />
    </>
  );
};

export default WealthManagement;
