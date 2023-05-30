import React from 'react';

function Objective() {
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
    alignItems: "center"
  };

  const imageStyle = {
    width: "500px",
    height: "500px",
    borderRadius: "20px",
    marginLeft: "280px",
    transition: "transform 0.3s"
  };
  
  const contentStyle2 = {
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
        .zoom-image-container:hover img {
          transform: scale(1.2);
        }
        `}
      </style>
      <br />
      <div style={introStyle}>
        <h2>Our Objective:</h2>
      </div>
      <div style={contentStyle2}>
        Discover My Mind is a community of people dedicated to Emotional Intelligence and related sciences.<br/> This is designed for educationists, parents, counsellors, coaches, and psychotherapists. <br/>With the help of eminent contributors and participants, our main objectives are:
      </div>
      <br/>
      <div style={containerStyle}>
        <div className="zoom-image-container">
          <img src="./images/objective.jpg" alt="Example Image" style={imageStyle} />
        </div>
        <div style={contentStyle}>
          <p> • Need of the hour education and awareness on the subject matter.</p>
          <p> • Provide training and certification of teachers and coaches.</p>
          <p> • Conduct insightful webinars and podcasts on social media.</p>
          <p> • Profiling and assessment of students for academic success and career planning.</p>
          <p> • Provide online counselling by experts.</p>
          <p> • Provide a nationwide knowledge exchange and networking membership platform.</p>
          <p> • Provide a unique practice management solution for psychotherapists.</p>
          <p> • Provide a platform for mental health professionals to promote their expertise.</p>
        </div>
      </div>
    </div>
  );
}

export default Objective;
