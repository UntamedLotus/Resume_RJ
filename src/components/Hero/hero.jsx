import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
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
        <img
          className="img"
          src="https://64.media.tumblr.com/c41035ddb2eb612e53649324fdc1a75d/413a65c8cfce3d3f-b0/s540x810/e0335ae627eb1b9ebac0a2b913cf10e5649cf7af.gifv"
        />
      </div>
    </div>
  );
}

export default Hero;

{
  /* 
  
     <img className="img-A" src="https://i.postimg.cc/Jz1msRPH/coding.gif" />

  <img src="https://64.media.tumblr.com/fe6d6866c5f3902586116f472a2ab20f/921683666be3fa68-8a/s540x810/90260b81c89a1cc7d3f0bdabf9096d7530e3f83d.gifv" /> */
}
