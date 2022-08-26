import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGithub } from "react-icons/fa";
import { SiRedux, SiJavascript } from "react-icons/si";

import { IoLogoFirebase } from "react-icons/io5";
import { GoLogoGithub } from "react-icons/go";

import "./skills.scss";

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-section">
        <div className="technology">
          <p>Technologies</p>
          <ul>
            <li>
              <FaHtml5 color="#ee4f33" />
            </li>
            <li>
              <FaCss3Alt color="#1e90ff" />
            </li>
            <li>
              <SiJavascript color="#fcc334" className="javascript" />
            </li>
          </ul>
        </div>

        <div className="framework">
          <p>Framework</p>
          <ul>
            <li>
              <FaReact color="#6495ed" />
            </li>
            <li>
              <SiRedux color="#7b0bca" />
            </li>
            <li>
              <FaSass color="#ff1493" />
            </li>
          </ul>
        </div>

        <div className="other">
          <p>Other</p>
          <ul>
            <li>
              <GoLogoGithub color="#222" />
            </li>
            <li>
              <FaGithub color="#222" />
            </li>
            <li>
              <IoLogoFirebase color="orange" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
