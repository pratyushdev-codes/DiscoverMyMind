import React from 'react';

function Video() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <div style={{ width: "90%", height: "90%", borderRadius: "20px", overflow: "hidden", background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)" }}>
        <video src="./images/EI-Video.mp4" controls autoPlay style={{ width: "100%", height: "99%", objectFit: "cover" }} />
      </div>
    </div>
  );
}

export default Video;
