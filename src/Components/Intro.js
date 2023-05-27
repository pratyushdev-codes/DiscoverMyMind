import React from 'react';


function Intro() {
  const containerStyle = {
    display: "flex",
    alignItems: "center"
  };

  const introStyle = {
    fontFamily: "PT sans",
    color: "#65A0FB",
    fontSize: "80px",
    fontWeight: "bold"
  };

  const textContainerStyle = {
    flex: 1,
    marginLeft: "30px",
    textAlign: "left",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)'
  };

  const gifStyle = {
    height: "400px",
    width: "700px",
    marginRight: "0px"
  };

  return (
    <div>
      <br/><br/>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <div style={introStyle}>
            <h2>What is Emotional Intelligence?</h2>
          </div>
          <div>
            Emotional Intelligence is the ability to understand, evaluate, regulate, and employ emotions to maximize our abilities,
            inter and intra-personal relationships, and self-awareness.
            We have several options that enhance your child’s multiple intelligence, learning abilities, and talents.
            This is done by mapping the intellect with proven tests used by leading educationists worldwide.
          </div>
        </div>
        <img src="./images/brain.gif" alt="Brain GIF" style={gifStyle} />
      </div>
      {/* <div><Spline scene="https://prod.spline.design/nMFHkgv34T9TM9uD/scene.splinecode" /></div> */}
    </div>
  );
}

export default Intro;
