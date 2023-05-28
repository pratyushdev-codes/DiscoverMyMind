import React from 'react';

function Books() {
  const introStyle = {
    fontFamily: 'PT sans',
    color: '#65A0FB',
    fontSize: '80px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: '28px'
  };
  const contentStyle = {
    flex: 1,
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)'
  };

  return (
    <div>
      <br />
      <div style={introStyle}>
        <h2>Our Books</h2>
      </div>
      <div style={contentStyle}>
        Emotional (EQ) assessments are an important learning platform in most countries.<br/> 
        This is an effort by Mr. Vasant Agarwal, one of India's renowned experts to bring this important evaluation and guidance program to India.
      </div><br/>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1px' }}>
        <div class="card" style={{ width: '25rem', borderRadius:"20px", borderColor:"white" }}>
                        <div style={{ borderRadius: '20px', borderColor: 'grey', borderStyle: 'solid', borderWidth: '1px' }}>
                <img src="./images/power.jpeg" className="card-img-top" alt="..." style={{ borderRadius: '20px',border:"1.5px dotted black " }} />
                </div>
          <div class="card-body">
            <h5 class="card-title" style={{fontFamily: 'PT sans',color: '#65A0FB',}}>The Power of Emotional Intelligence</h5>
            <p class="card-text" style={contentStyle}>              
              An in-depth clinical analysis of the power of emotional intelligence and whole brain learning and development.
              An understanding of the DNA of the brain and our multiple intelligence.
            </p>
            <a href="#" class="btn btn-primary" style={{borderRadius:"20px"}}>
              Read More
            </a>
          </div>
        </div>

        <div class="card" style={{ width: '25rem', borderRadius:"20px", borderColor:"white" }}>
                        <div style={{ borderRadius: '20px', borderColor: 'grey', borderStyle: 'solid', borderWidth: '1px' }}>
                <img src="./images/parenting.jpeg" className="card-img-top" alt="..." style={{ borderRadius: '20px' ,border:"1.5px dotted black "}} />
                </div>
          <div class="card-body">
            <h5 class="card-title" style={{fontFamily: 'PT sans',color: '#65A0FB',}}>Parenting with Emotional Intelligence</h5>
        <p class="card-text" style={contentStyle}>              
                            An excellent guide for parents when the child
                    becomes unmanageable or not achieving
                    their potential. A detailed analysis of
                    behavior modification and emotional intelligence
            </p>
            <a href="#" class="btn btn-primary" style={{borderRadius:"20px"}}>
              Read More
            </a>
          </div>
        </div>

        <div class="card" style={{ width: '25rem', borderRadius:"20px", borderColor:"white" }}>
                        <div style={{ borderRadius: '20px', borderColor: 'grey', borderStyle: 'solid', borderWidth: '1px' }}>
                <img src="./images/accidental.jpeg" className="card-img-top" alt="..." style={{ borderRadius: '20px' ,border:"1.5px dotted black "}} />
                </div>
          <div class="card-body">
            <h5 class="card-title" style={{fontFamily: 'PT sans',color: '#65A0FB',}}>The Accidental Addict and The Power of Positive Thinking</h5>
            <p class="card-text" style={contentStyle}>              
                            A detailed study on addiction and why it is
                the precursor or the aftermath of
                depression, stress and anxiety. A survival
                guide for addicts, and a caregivers guide for their loved ones.
            </p>
            <a href="#" class="btn btn-primary" style={{borderRadius:"20px"}}>
              Read More
            </a>
          </div>
        </div>

        

      </div>
    </div>
  );
}

export default Books;
