import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg" style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      backgroundColor: "aqua",
      padding: "10px 0",
    }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Civil-Fintech</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/scb">Small Scale Business Loans</Link></li>
                <li><Link className="dropdown-item" to="/mr">Money Remittance</Link></li>
                <li><Link className="dropdown-item" to="/wm">Wealth Management</Link></li>
                <li><Link className="dropdown-item" to="/mf">Micro Finance</Link></li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/emical">EMI Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">Join As a Member</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update-profile">Update Profile</Link>
            </li>
            <li className="nav-item">
              {user ? (
                <div className="d-flex align-items-center">
                  <span className="nav-link text-success fw-bold mb-0">Welcome, {user.userID}</span>
                  <button className="btn btn-sm btn-outline-danger ms-2" onClick={logout}>
                    Logout
                  </button>
                </div>
              ) : (
                <Link className="nav-link" to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
