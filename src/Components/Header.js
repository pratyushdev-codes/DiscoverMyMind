import React from 'react';

function Header() {
  const headerStyle = {
    background: "linear-gradient(to right, #ffff, #5614b0, #0052d4)",
    color: "white",
    height: "500px",
    textAlign: "center",
    position: "relative",
  };

  const linkStyle = {
    marginRight: "20px",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Titillium Web",
  };

  const content = {
    color: "white",
    textAlign: "left",
    marginLeft: "30px",
  };

  const buttonStyle = {
    backgroundColor: "#ddd",
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
  };

  const downStyle = {
    textAlign: "left",
    background: "linear-gradient(to right, #FFFFFF, #c779d0, #4bc0c8)",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textDecoration: "none",
    display: "inline-block",
    margin: "4px -230px 25px 248px",
    cursor: "pointer",
    marginLeft: "20px",
    fontSize: "13px",
    fontWeight: "bold",
    borderRadius: "16px",
  };

  const overlayTextStyle = {
    position: "absolute",
    top: "24%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
  };

  const mediaQuery = `@media only screen and (max-width: 768px) {
    ${linkStyle.fontSize = "16px"};
    ${buttonStyle.fontSize = "14px"};
    ${downStyle.fontSize = "14px"};
    ${overlayTextStyle.fontSize = "24px"};
    ${overlayTextStyle.left = "50%"};
    ${overlayTextStyle.transform = "translate(-50%, -50%)"};
    ${headerStyle.height = "auto"};
  }`;

  return (
    <div>
      <div style={headerStyle}>
        <br />
        <br />

        <a href="/books" style={linkStyle}>Our Books</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/profiling" style={linkStyle}>Profiling and Assessment</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/training" style={linkStyle}>Training and Certification</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/about" style={linkStyle}>About Us</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={buttonStyle}>Contact Us</button>
        <br />
        <br />
        <br />

        <div style={{ position: "relative" }}>
          <img src="./images/banner 3.jpg" style={{ borderRadius: "20px", width: "200vh" }} alt="Banner" />
          <div style={overlayTextStyle}>
            <h1 style={{ margin: "0" }}>Welcome to Discover my Mind</h1>
            <h2 style={{ margin: "0" }}>Community Of People Dedicated To</h2>
            <h2 style={{ margin: "0" }}>Emotional Intelligence</h2>

            <button style={downStyle}>Free Consultation</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button style={downStyle}>Join the Group</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;


     