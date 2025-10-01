
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    fetch("http://localhost:3001/members") 
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch members");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Invalid data format");
        setUsers(data);
      })
      .catch((err) => {
        console.error("Error loading user data:", err.message);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!username || !password) {
      setMessage("Enter username and password");
      return;
    }
  
    const user = users.find(
      (u) =>
        u.userID?.toString().trim() === username.trim() &&
        u.password?.toString().trim() === password.trim()
    );
    

    if (user) {
      setMessage("Login successful! Redirecting...");
      login(user); 
      setTimeout(() => {
        navigate("/"); 
      }, 1000);
    } else {
      setMessage("Invalid credentials, try again!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ marginTop: "100px" }}>
        <h1 className="mb-4">Login Page</h1>

        <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label className="form-label fw-bold">Username:</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label fw-bold">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            <i
              className="position-absolute end-0 top-50 translate-middle-y me-3"
              style={{ cursor: "pointer", zIndex: 1, padding: "15px", height: "30px", margin: "5px"}}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-eye" aria-hidden="true"></i>
              )}
            </i>
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Login
          </button>

          {message && (
            <div className="mt-3 text-center text-danger">{message}</div>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
