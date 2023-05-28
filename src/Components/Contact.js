import React from 'react';

function Contact() {
  const introStyle = {
    fontFamily: "PT sans",
    color: "#65A0FB",
    fontSize: "80px",
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "100px"
  };

  const contentStyle = {
    width: "500px",
    marginLeft: "120px",
    textAlign: "left",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.5)'
  };

  const contentStyle2 = {
    width: "500px",
    height: "150px",
    marginLeft: "120px",
    textAlign: "left",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.5)',
    resize: "none",
    padding: "10px 20px"
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <div style={introStyle}>
            <h2>Get in Touch</h2>
          </div>
          <br />
          <form>
            <div class="form-group" style={{ border: "20px" }}>
              <input type="text" class="form-control" placeholder="Name" style={contentStyle} /><br />
              <input type="text" class="form-control" placeholder="Email" style={contentStyle} /><br />
              <input type="text" class="form-control" placeholder="Subject" style={contentStyle} /><br />
              <input type="text" class="form-control" placeholder="Contact Number" style={contentStyle} /><br />
              <textarea class="form-control" placeholder="Message" style={contentStyle2} /><br />
            </div>
            <button type="submit" class="btn btn-primary" style={{ borderRadius: "50px" }}>Send Message</button>
          </form>
        </div>
        <div style={{ flex: 1 }}>
          <div style={introStyle}>
            <h2>Contact Us</h2>
          </div>
          <div style={contentStyle}>
            Share your vision and we'll tell you how we'll bring it to life.<br /><br/>
            <img src="./images/phone.png" style={{ width: "30px", height: "30px" }} /> +91 9958960437<br />
            <br />
            <img src="./images/mail.png" style={{ width: "30px", height: "30px" }} /> info@discovermymind.com
          </div>
          
        </div>
       
      </div>
      
    </div>
  );
}

export default Contact;
