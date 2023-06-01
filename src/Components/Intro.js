import React from 'react';

function Intro() {
  const introStyle = {
    fontFamily: "PT sans",
    color: "#65A0FB",
    fontSize: "80px",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "28px"
  };

  const contentStyle = {
    flex: 1,
    marginLeft: "38px",
    textAlign: "left",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)'
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const imageStyle = {
    width: "415px",
    marginLeft:"140px",
    height: "250px",
    borderRadius: "1px",
    
  };
  
  const contentStyle2 = {
    flex: 1,
    marginLeft: "30px",
    textAlign: "left",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)'
  };
  const downStyle = {
    textAlign: "left",
    backgroundColor: "black",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textDecoration: "none",
    display: "inline-block",
   
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold",
    borderRadius: "16px",
  };

  return (
    <div>
      <br />
      <div style={introStyle}>
        <h2>What is Emotional Intelligence?</h2>
      </div>
    
      <div style={containerStyle}>
        <img src="./images/brain.gif" alt="Example Image" style={imageStyle} />
        <div style={contentStyle2}>
          Emotional Intelligence is the ability to understand, evaluate, regulate, and employ emotions to maximize <br/>our abilities, inter and intra-personal relationships, and self-awareness. We have several options that enhance<br/> your child’s multiple intelligence, learning abilities, and talents. This is done by mapping the intellect with proven <br/>tests used by leading educationists worldwide.<br/><br/>
          <button style={downStyle}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;