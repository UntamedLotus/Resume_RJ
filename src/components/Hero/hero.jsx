import React from "react";
import "./hero.scss";
// import { HashLink as Link } from "react-router-hash-link";

function Hero() {
  return (
    <div className="hero">
      {/* <div className="nav">
        <div className="nav-logo">
          <h2> Ruttika</h2>
        </div>
        <div className="nav-links"></div>
      </div> */}
      <div className="about">
        <h2>Jadhav Ruttika</h2>
        <p className="role">Front-end Developer</p>
        <p className="information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          dolorum voluptates ab aperiam soluta culpa voluptatum. Repellendus aut
          modi saepe culpa similique nesciunt error fuga perspiciatis vero?
          Eius, fuga iure.
        </p>
      </div>
      <div className="about-img">
        {/* <img
          className="img"
          src="https://64.media.tumblr.com/c41035ddb2eb612e53649324fdc1a75d/413a65c8cfce3d3f-b0/s540x810/e0335ae627eb1b9ebac0a2b913cf10e5649cf7af.gifv"
          alt="gif by mienar on tumbler"
        /> */}
      </div>
    </div>
  );
}

export default Hero;
