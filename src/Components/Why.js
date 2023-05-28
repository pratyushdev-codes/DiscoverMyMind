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

  const contentSyle={
    flex: 1,
    marginLeft: "30px",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)'
  }
  return (
     <div>
          <div style={introStyle}>
            <h2>Why Discover My Mind??</h2>
          </div>
          <div style={contentSyle}>
          Leveraging our years of extensive experience in emerging digital technologies, <br/>we have built innovative technology solutions for industry incumbents solving their critical business challenges.
          </div>
           <br/>
           <div>
           <img src="./images/why.png" style={{height:"320px", width:"950px"}}/>
           </div>

    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="card" style={{ width: "9rem", marginRight: '20px', borderColor: "white"}}><br/>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="./images/focus.png" className="card-img-top" alt="..." style={{ width: "65px", height: "65px" }} />
            <div className="card-body">
              <div className="btn btn" style={{ color:"white",borderRadius: "20px", background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)", height:"40px", width:"105px" }}>Focus</div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "9rem", marginRight: '20px', borderColor: "white" }}><br/>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="./images/skill.png" className="card-img-top" alt="..." style={{ width: "65px", height: "65px" }} />
            <div className="card-body">
              <div className="btn btn" style={{ color:"white",borderRadius: "20px", background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)", height:"40px", width:"105px" }}>Skill</div>
            </div>
          </div>
        </div>

      <br />

      <div className="card" style={{ width: "9rem",borderRadius:"20px", marginRight: '20px', borderColor: "white" , background: "white"}}><br/>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="./images/creativity.png" className="card-img-top" alt="..." style={{ width: "65px", height: "65px" }} />
            <div className="card-body">
              <div className="btn btn" style={{color:"white",borderRadius: "20px", background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)", height:"40px", width:"105px" }}>Motivation</div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "9rem", marginRight: '20px', borderColor: "white" }}><br/>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="./images/empathy.png" className="card-img-top" alt="..." style={{ width: "65px", height: "65px" }} />
            <div className="card-body">
              <div className="btn btn" style={{ color:"white",borderRadius: "20px", background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)",height:"40px", width:"105px"  }}>Empathy</div>
            </div>
          </div>
        </div>
        </div>
        <br/>
        <br/>
    </div> */}
    </div>
  );
}

export default Why;
