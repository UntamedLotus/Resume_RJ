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
          <button className="btn">
            <a
              href="https://freecodecamp.org/certification/fcc862c562a-2710-4913-af49-effc0e2b508a/responsive-web-design"
              target="_blank"
              rel="noreferrer"
            >
              Authenticate
            </a>
          </button>
        </div>

        <div className="certificate">
          <img
            className="jlds"
            src="https://i.postimg.cc/856y04Pn/Screenshot-23.png"
            alt="JavaScript Algorithm and Data Structure Certificate by freeCodeCamp"
          />

          <button className="btn">
            <a
              href="https://freecodecamp.org/certification/fcc862c562a-2710-4913-af49-effc0e2b508a/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noreferrer"
            >
              Authenticate
            </a>
          </button>
        </div>

        <div className="certificate">
          <img
            className="js"
            src="https://i.postimg.cc/xjskZ2hh/Java-Script-Certificate.jpg"
            alt="React certification by Udemy"
          />
          <button className="btn">
            <a
              href="https://freecodecamp.org/certification/fcc862c562a-2710-4913-af49-effc0e2b508a/responsive-web-design"
              target="_blank"
              rel="noreferrer"
            >
              Authenticate
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
