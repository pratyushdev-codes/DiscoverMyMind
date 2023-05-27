import React from 'react';

function Objective() {
  const introStyle = {
    fontFamily: "PT sans",
    color: "#65A0FB",
    fontSize: "80px",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "28px"
  };

  const contentStyle = {
    flex: 1,
    marginLeft: "30px",
    textAlign: "left",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)'
  };

  return (
    <div>
    <br/>
      <div style={introStyle}>
        <h2>What is Emotional Intelligence?</h2>
      </div>
      <div style={contentStyle}>
        Discover My Mind is a community of people dedicated to Emotional Intelligence and related sciences. This is designed for educationists, parents, counsellors, coaches, and psychotherapists. With the help of eminent contributors and participants, our main objectives are:
      </div>
      <br />
      <div style={{ borderColor: "black", borderRadius: "20px", color: "blue" }}>
        <img src="./images/l.png" alt="Example Image" />
      </div>
    </div>
  );
}

export default Objective;
