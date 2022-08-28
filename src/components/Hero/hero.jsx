import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero-section" id="Hero">
      <div className="about">
        <h2>Jadhav Ruttika</h2>
        <p className="role">Front-end Developer</p>
        <p className="information">
          I hold degree as Botany major but had a particular interest in
          development. I'm a self-taught React frontend developer. I'm
          practicing & learning front-end techniques since October 2021.{" "}
          <p>
            Being an sketch artist I particularly focus on developing good UI
            and user friendly apps. One of the important reason I love
            programming that it particularly gives me chance to explore new
            things and enhance my artistic side.
          </p>
        </p>
      </div>
      <div className="about-img">
        <img
          className="img"
          src="https://64.media.tumblr.com/c41035ddb2eb612e53649324fdc1a75d/413a65c8cfce3d3f-b0/s540x810/e0335ae627eb1b9ebac0a2b913cf10e5649cf7af.gifv"
          alt="gif by mienar on tumbler"
        />
      </div>
    </div>
  );
}

export default Hero;
