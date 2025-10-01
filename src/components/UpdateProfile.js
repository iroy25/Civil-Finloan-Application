import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function UpdateProfile() {
  const [members, setMembers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    axios
      .get("/members") 
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  const findMember = (username) => {
    return members.find((m) => m.userID === username); 
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !mobile || !fullName) {
      setMessage("All fields are required!");
      return;
    }

    const user = findMember(username); 

    if (user) {
      const updatedUser = {
        ...user,
        password,
        mobile,
        fullName,
      };

    
      axios
        .put(`/members/${user.id}`, updatedUser)  
        .then((response) => {
          setMessage("Profile Updated Successfully!");
          setTimeout(() => navigate("/dashboard"), 3000);  
        })
        .catch((err) => {
          setMessage("Error updating profile. Please try again.");
        });
    } else {
      setMessage("Invalid credentials, please check your details.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ marginTop: "80px" }}>
        <h1 className="mb-4">Update Profile</h1>
        <form onSubmit={handleSubmit} className="w-md-50 w-sm-75">
          <div className="mb-3">
            <label className="form-label fw-bold">Username:</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Mobile No:</label>
            <input
              type="text"
              className="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter Mobile Number"
            />
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label fw-bold">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control pe-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              style={{ paddingRight: "3rem" }}
            />
            <i
              className="position-absolute top-50 end-0 translate-middle-y"
              style={{ cursor: "pointer", zIndex: 1, padding: "15px", height: "30px", margin: "5px"}}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <i className="fa fa-eye-slash" aria-hidden="true"></i> : <i className="fa fa-eye" aria-hidden="true"></i>}
            </i>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Full Name:</label>
            <input
              type="text"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Full Name"
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Update
          </button>
        </form>

        {message && <div className="mt-3 text-center text-danger">{message}</div>}
      </div>
    </>
  );
}

export default UpdateProfile;
