import React from "react";
import "./certificate.scss";

function Certificate() {
  return (
    <div className="certificate-section">
      <h2>Certifications</h2>
      <div className="certificate-card">
        <div className="certificate">
          <img
            className="rwd"
            src="https://i.postimg.cc/4y3gcj1h/Screenshot-8.png"
          />
        </div>

        <div className="certificate">
          <img
            className="jlds"
            src="https://i.postimg.cc/856y04Pn/Screenshot-23.png"
          />
        </div>

        <div className="certificate">
          <img
            className="js"
            src="https://i.postimg.cc/xjskZ2hh/Java-Script-Certificate.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Certificate;
