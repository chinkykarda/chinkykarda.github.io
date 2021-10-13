import React from 'react';
import './styles.css';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from "react-icons/di";
import * as BiIcons from "react-icons/bi";

function Skills() {
  return (
    <>
    <div className="skills">
      <h1>My Skills</h1>
      <br/>
      <div className="languages">
        <h2>Languages</h2>
        <ul>
          <li> <span> <FaIcons.FaCode/></span> C/C++</li>
          <li> <span><DiIcons.DiPython/></span> Python</li>
          <li> <span><DiIcons.DiJava/></span> Java</li>
          <li> <span><DiIcons.DiJavascript1/></span> JavaScript</li>
        </ul>
      </div>
      <div className="frameworks">
      <h2>Markup Languages and Frameworks</h2>
      <ul>
          <li> <span><DiIcons.DiHtml5/></span> HTML</li>
          <li> <span><DiIcons.DiCss3/></span> CSS</li>
          <li> <span><DiIcons.DiDatabase/></span> SQL</li>
          <li> <span> <DiIcons.DiAngularSimple/></span> Angular</li>
          <li> <span><DiIcons.DiDjango/></span> Django</li>
          
        </ul>
      </div>
      <div className="libraries">
      <h2>Industry Skills</h2>
      <ul>
          <li> <span> <FaIcons.FaFileCode/></span> Data Structures and Algorithms</li>
          <li> <span> <FaIcons.FaLaptopCode/></span> System Design</li>
          <li> <span> <BiIcons.BiCheckDouble/></span> Object-Oriented Programming</li>
          <li> <span> <FaIcons.FaBrain/></span> Deep Learning</li>
          <li> <span> <BiIcons.BiNetworkChart/></span> Blockchain Technology</li>
          
        </ul>
      
      </div>
    </div>
    </>
  );
}

export default Skills;