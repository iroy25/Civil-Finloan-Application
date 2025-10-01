import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const SignUp = () => {
  const [state, setState] = useState({
    userID: "",
    mobile: "",
    password: "",
    fullName: "",
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!state.userID || !state.password || !state.mobile) {
      setMessage("All fields are required!");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3001/members");
      const members = response.data;

      
      const lastID = members.length > 0
        ? Math.max(...members.map((user) => parseInt(user.id))) 
        : 0;
      const newID = (lastID + 1).toString();

      
      const userExists = members.some((user) => user.userID === state.userID);
      if (userExists) {
        setMessage("Username already exists. Try another.");
        return;
      }

      
      const newUser = { ...state, id: newID };
      await axios.post("http://localhost:3001/members", newUser);

     
      setState({ userID: "", mobile: "", password: "", fullName: "" });
      setMessage("Registration successful! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);  
    } catch (error) {
      console.error("Error adding user:", error);
      setMessage("Failed to register. Make sure json-server is running.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ marginTop: "80px" }}>
        <h1 className="mb-4">Join as a member</h1>

        <form onSubmit={handleSubmit} className="w-md-50 w-sm-75">
          <div className="mb-3">
            <label className="form-label fw-bold">Username:</label>
            <input
              type="text"
              className="form-control"
              name="userID"
              value={state.userID}
              onChange={handleChange}
              placeholder="Enter your Name (e.g., user34)"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Mobile No:</label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              value={state.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
            />
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label fw-bold">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Enter Password"
              style={{ paddingRight: "3rem" }}
            />
            <i
              className="position-absolute top-50 end-0 translate-middle-y"
              style={{ cursor: "pointer", zIndex: 1, padding: "15px", height: "30px", margin: "5px" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-eye" aria-hidden="true"></i>
              )}
            </i>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Full Name:</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={state.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">Register</button>
        </form>

        {message && (
          <div className="mt-3 text-center fw-bold text-danger">{message}</div>
        )}
      </div>
    </>
  );
};

export default SignUp;
