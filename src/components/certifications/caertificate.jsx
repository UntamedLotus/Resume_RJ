import React from "react";
import "./certificate.scss";

function Certificate() {
  return (
    <div className="certificate-section" id="Certification">
      <h2>Certifications</h2>
      <div className="certificate-card">
        <div className="certificate">
          <img
            className="rwd"
            src="https://i.postimg.cc/4y3gcj1h/Screenshot-8.png"
            alt="Responsive Web Design certificate by freeCodeCamp"
          />

          <a
            href="https://freecodecamp.org/certification/fcc862c562a-2710-4913-af49-effc0e2b508a/responsive-web-design"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn"> Authenticate</button>
          </a>
        </div>

        <div className="certificate">
          <img
            className="jlds"
            src="https://i.postimg.cc/856y04Pn/Screenshot-23.png"
            alt="JavaScript Algorithm and Data Structure Certificate by freeCodeCamp"
          />

          <a
            href="https://freecodecamp.org/certification/fcc862c562a-2710-4913-af49-effc0e2b508a/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn"> Authenticate</button>
          </a>
        </div>

        <div className="certificate">
          <img
            className="js"
            src="https://i.postimg.cc/SKprSwZm/React-Certificate.jpg"
            alt="React certification by Udemy"
          />

          <a
            href="https://ude.my/UC-075f6452-b2cd-4351-a144-bf3d6448bec5"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn"> Authenticate</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
