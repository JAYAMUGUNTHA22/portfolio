import React from 'react'
import './skills.css'
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import figma1 from '../../assets/figma.png';
import sql from '../../assets/sql2.png';
import c from '../../assets/c.png';
import java from '../../assets/java.png';

const Skills = () => {
  return (
    <section id="skills">
      <div className="skillsContainer">
        <h2 className="skillsTitle">Skills</h2>
        <div className="skillsGrid">
          <div className="skillBars">
            <img src={html} alt="html" className="skillBarImg" />
            <div className="skillBarText"><h1>HTML</h1></div>
          </div>
          <div className="skillBars">
            <img src={css} alt="css" className="skillBarImg" />
            <div className="skillBarText"><h1>CSS</h1></div>
          </div>
          <div className="skillBars">
            <img src={js} alt="js" className="skillBarImg" />
            <div className="skillBarText"><h1>JAVASCRIPT</h1></div>
          </div>
          <div className="skillBars">
            <img src={react} alt="react" className="skillBarImg" />
            <div className="skillBarText"><h1>REACT</h1></div>
          </div>
          <div className="skillBars">
            <img src={figma1} alt="figma1" className="skillBarImg" />
            <div className="skillBarText"><h1>FIGMA</h1></div>
          </div>
          <div className="skillBars">
            <img src={sql} alt="sql1" className="skillBarImg" />
            <div className="skillBarText"><h1>SQL</h1></div>
          </div>
          <div className="skillBars">
            <img src={c} alt="c" className="skillBarImg" />
            <div className="skillBarText"><h1>C</h1></div>
          </div>
          <div className="skillBars">
            <img src={java} alt="java" className="skillBarImg" />
            <div className="skillBarText"><h1>JAVA</h1></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills