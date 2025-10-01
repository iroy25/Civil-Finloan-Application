import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        

        <div style={socialIconsStyle}>
          <FaFacebook size={30} style={iconStyle} />
          <FaTwitter size={30} style={iconStyle} />
          <FaLinkedin size={30} style={iconStyle} />
          <FaInstagram size={30} style={iconStyle} />
        </div>

        <div style={footerTextStyle}>
          <p>&copy; 2025 Civil-Fintech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "aqua",
  color: "#000",
  padding: "20px 0",
  position: "absolute",
  bottom: "0",
  width: "100%",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const socialIconsStyle = {
  display: "flex",
  gap: "20px",
};

const iconStyle = {
  color: "#000",
  cursor: "pointer",
  transition: "color 0.3s",
};

const footerTextStyle = {
  textAlign: "center",
  marginTop: "10px",
};

export default Footer;
