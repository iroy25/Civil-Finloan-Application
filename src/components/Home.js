import React from "react";
import Navbar from './Navbar';
import Footer from "./Footer";

const Home = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <div className="container-fluid p-0">
      <main
  className="d-flex justify-content-center align-items-center"
  style={{
    marginTop: "60px",
    width: "100vw",
    height: "auto",           
    overflow: "hidden",
  }}
>
  <img
    src="/money_plant.jpg"
    alt="Background"
    className="img-fluid"
    style={{
      width: "100%",
      height: "auto",         
      objectFit: "cover",     
      display: "block",
    }}
  />
</main>

<section
  className="text-center p-5 position-relative z-1 d-flex flex-column justify-content-center align-items-center"
  style={{ minHeight: "100px" }}
>
  <h2 className="text-success mb-3 fw-bold text-teal-600  fs-4">
    An Hub For Your Financial Needs
  </h2>
  <p
    className="text-gray-700"  >

    We offer an extensive array of services, including loans to citizens,
    money transfer, wealth management, and microloans to agriculture and
    small businesses in rural regions.
  </p>
</section>


      </div>
      <Footer />
    </>
  );
};

export default Home; 
