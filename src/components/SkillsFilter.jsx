import React from 'react'
import SectionHead from './SectionHead'

import '../pages/home/home.css'
const SkillsFilter = () => {
  return (
    <section className="skills">
        <div className='container skills__container'>
            <SectionHead title = "Skills"/>
            <div className="skills__wrapper">
                <div className='skills__skill'>
                    <h3>Technical Skills</h3>
                    <ul className='skills__list'>
                        <li>
                            Java, Python, C#, C++, JavaScript
                        </li>
                        <li>
                            HTML, CSS, ajax, Bootstrap, React, Flutter, .NET
                        </li>
                        <li>
                            MATLAB, R
                        </li>
                        <li>
                            Unix/Linux, MS Windows, Mac OSX 
                        </li>
                        <li>
                            SQL, Firebase
                        </li>
                        <li>
                            Unity, AndroidStudio, XCode, Godot, VS, UE, SharePoint
                        </li>
                    </ul>
                </div>
                <div className='skills__skill'>
                    <h3>Others</h3>
                    <ul className='skills__list'>
                        <li>
                            Mandarin, English, Farsi(still learning), Portugese(learning too)
                        </li>
                        <li>
                            Piano(ABRSM Diploma in Piano Performance)
                        </li>
                        <li>
                            Flute(Was part of a JinFan concert band for 5 years and was the lead flute player for 2 years)
                        </li>
                        <li>
                            Diving(PADI Open Water Diver & Dry Suit Certificate)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SkillsFilter
