import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiRedux, SiJavascript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import "./skills.scss";

function Skill() {
  return (
    <div className="skills-section">
      <h2>I'm familiar with...</h2>
      <div className="skills">
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
              <FaGitAlt color="#222" />
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

export default Skill;
