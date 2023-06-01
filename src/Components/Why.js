import React from 'react';

function Why() {
  const introStyle = {
    fontFamily: "PT sans",
    color: "#65A0FB",
    fontSize: "80px",
    fontWeight: "bold",
    textAlign:"center",
    marginLeft:"28px"
  };

  const contentStyle = {
    flex: 1,
    marginLeft: "30px",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)'
  };

  return (
    <div>
      <style>
        {`
        .zoom-image-container {
          overflow: hidden;
        }
        
        .zoom-image-container img {
          transition: transform 0.3s;
          width: 100%;
        }
        
        .zoom-image-container:hover img {
          transform: scale(1.1);
        }
        `}
      </style>
      <div style={introStyle}>
        <h2>Why Discover My Mind??</h2>
      </div>
      <div style={contentStyle}>
        Leveraging our years of extensive experience in emerging digital technologies,<br/>we have built innovative technology solutions for industry incumbents solving their critical business challenges.
      </div>
      <br/>
      <div className="zoom-image-container">
        <img src="./images/why.png" style={{ height: "320px", width: "950px" }}/>
      </div>
    </div>
  );
}

export default Why;