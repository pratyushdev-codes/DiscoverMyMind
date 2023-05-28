import React from 'react'

function Invest() {
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
    marginLeft: "30px",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)'
  };

  return (
    <div>
    <br/>
      <div style={introStyle}>
        <h2>Invest in your mind. It is the most precious asset we have</h2>
      </div>
      <div style={contentStyle}>
        
<p>It is essential that a child be emotionally healthy in order to be academically successful. This is not only a fact of life but the inconvenient truth.<br/> Unfortunately, children do not come with an t‘operations manual’ when they are born. Each child has their own personality with varying levels of intelligence, emotions and learning abilities. Often, we do not know what to do when a child is under achieving or sometimes unmanageable. The emphasis has been on the Intelligence Quotient, or I.Q. with grades in mind, as opposed to the Emotional Quotient or E.Q. which is many, many times more important. Each child has multiple intelligence, such as logic, memory, aptitude, skillset etc. which form the E.Q. Some of these abilities are at a higher level than others. In order to achieve a child’s maximum scholastic potential, it is highly recommended that an E.Q. assessment be done, the learning attributes are identified and remedial teaching methods employed to help the student regain self confidence and help in career planning.

At Discover My Mind, we have the best value proposition. This is the result of work done by renowned psychologists who are experts on the subject matter. Once the assessment is done, certified counsellors are available for further guidance as may be needed. </p>
      </div>
      <br />
 
    </div>
  );
}

export default Invest