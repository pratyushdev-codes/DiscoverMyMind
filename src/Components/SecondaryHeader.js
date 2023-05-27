import React from 'react';

function SecondaryHeader() {
  const linkStyle = {
    marginRight: "20px",
    color: "white",
    marginTop: "10px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "'GG Gothic Rounder', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  };

  const buttonStyle = {
    backgroundColor: "white",
    border: "none",
    fontSize: "15px",
    color: "black",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "16px",
    fontWeight: "bold",
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

  const header = {
    textAlign: "center",
    fontSize: "50px",
    fontWeight: "250px",
    fontFamily: "PT Sans",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const headerconent = {
    textAlign: "center",
    fontSize: "23px",
    fontWeight: "100px",
    fontFamily: "PT Sans",
    position: "absolute",
    color:"white",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    whiteSpace: "nowrap", // Added style to keep the text in a single line
  };

  return (
    <div style={{ position: "relative" }}>
      <img src="./images/ban.jpg" alt="Banner" style={{ width: "99%", paddingTop:"10px", borderRadius: "20px" }} />
      <div style={{ position: "absolute", top: "10%", left: "46%", transform: "translate(-50%, -50%)" }}>
        <a href="/books" style={linkStyle}>Our Books</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/profiling" style={linkStyle}>Profiling and Assessment</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/training" style={linkStyle}>Training and Certification</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/about" style={linkStyle}>About Us</a>&nbsp;&nbsp;&nbsp;&nbsp;
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
