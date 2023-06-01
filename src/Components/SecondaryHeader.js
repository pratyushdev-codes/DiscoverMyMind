import React from 'react';

function SecondaryHeader() {
  const linkStyle = {
    textAlign: "right",
    color: "white",
    
    marginTop: "10px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "'GG Gothic Rounder', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    display: "inline-block",
    marginRight: "20px",
  };

  const buttonStyle = {
    backgroundColor: "white",
    border: "none",
    fontSize: "15px",
    color: "black",
    padding: "10px 20px",
    marginTop: "10px",
    textDecoration: "none",
    display: "inline-block",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "16px",
    fontWeight: "bold",
    position: "absolute",
    top: "2px",
    right: "-120px",
  };

  const downStyle = {
    textAlign: "left",
    backgroundColor: "black",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textDecoration: "none",
    display: "inline-block",
    marginLeft: "21px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold",
    borderRadius: "16px",
  };

  const headerconent = {
    textAlign: "center",
    fontSize: "23px",
    fontWeight: "100px",
    fontFamily: "'GG Gothic Rounder', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    position: "absolute",
    color: "white",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    whiteSpace: "nowrap",
  };

  return (
    <div style={{ position: "relative" }}>
      <img src="./images/ban1.jpg" alt="Banner" style={{ width: "100%", minHeight: "713px", objectFit: "cover" }} />
      <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <a href="/discovermymind"><img src="./images/logo.png" style={{ borderRadius: "50px", width: "9%", height: "9%", marginLeft: "-70px" }} alt="Logo" /></a>
        <span>
          {/* <a href="/books" style={linkStyle}>Discover My Mind</a> */}
          <a href="/books" style={linkStyle}>Our Books</a>
          <a href="/profiling" style={linkStyle}>Profiling and Assessment</a>
          <a href="/training" style={linkStyle}>Training and Certification</a>
          <a href="/about" style={linkStyle}>About Us</a>
        </span>
        <button style={buttonStyle}>Contact Us</button>
      </div>
      <div style={{ position: "absolute", top: "83%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h2 style={headerconent}>Community Of People Dedicated To Emotional Intelligence</h2>
      </div>
      <div style={{ position: "absolute", top: "94%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <button style={downStyle}>Free Consultation</button>&nbsp;&nbsp;
        <button style={downStyle}>Join the Group</button>
      </div>
    </div>
  );
}

export default SecondaryHeader;