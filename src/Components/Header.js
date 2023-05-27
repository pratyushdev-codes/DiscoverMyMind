import React from 'react';
function Header() {
  const headerStyle = {
    // backgroundColor: "#404EED",
    background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)",
    color: "white",
    height: "500px",
    textAlign: "center",
    position: "relative",
    borderRadius: "20px",
    marginTop:"6px",
    marginLeft:"3px",
    marginRight:"3px"
  };
  

  const linkStyle = {
    marginRight: "20px",
    color: "white",
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
    fontWeight:"bold"
  };

  const downStyle = {
    textAlign: "left",
    backgroundColor:"black",
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
  fontWeight:"250px",
  fontFamily: "PT Sans",
};

const headerconent={
  textAlign:"center",
  fontSize:"30px",
  padding:"-10px",
 
  fontWeight:"100px",
  fontSize:"25px"
};
const headerconent2={
  textAlign:"center",
  fontSize:"30px",
  padding:"-10px",
};
  return (
    <div>
      <div style={headerStyle}>
        <br /><br />
        <a href="/books" style={linkStyle}>Our Books</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/profiling" style={linkStyle}>Profiling and Assessment</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/training" style={linkStyle}>Training and Certification</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/about" style={linkStyle}>About Us</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={buttonStyle}>Contact Us</button>
        <br /><br /><br />
        <div style={{ position: "relative" }}>
          <h1 style={header}>Welcome to Discover my Mind</h1>
          <h2 style={headerconent}>Community Of People Dedicated To<br/>Emotional Intelligence</h2>
        </div><br/><br/>
        <button style={downStyle}>Free Consultation</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={downStyle}>Join the Group</button>
      </div>
    </div>

  );
}

export default Header;
