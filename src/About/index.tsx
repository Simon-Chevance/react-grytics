import React, { useState } from "react";

function About(){
    const [selected, setSelected] = useState(1);
    return(
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img alt="schevance" src={require('../img/schevance3.jpg')}/>
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>Hi there, my name is Simon CHEVANCE, I'm 22 years old, I am actually a master first grade
                            student at SUPINFO.
                            I like to learn and discover new technologies since I am very young. I am passionate about
                            computers. </p>

                        <div className="tab-titles">
                            <p className={selected === 1 ? 'tab-links active-link':'tab-links'} onClick={() => setSelected(1)}>Skills</p>
                            <p className={selected === 2 ? 'tab-links active-link':'tab-links'} onClick={() => setSelected(2)}>Experience</p>
                            <p className={selected === 3 ? 'tab-links active-link':'tab-links'} onClick={() => setSelected(3)}>Education</p>
                        </div>
                        <div className="tab-contents active-tab" id="skills">
                            <ul>
                                <li><span>UI/UX</span><br/>Designing Web/App interfaces</li>
                                <li><span>Web Development</span><br/>Web app Development</li>
                                <li><span>Management/Leading</span><br/>Team leader for IT Projects</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="experience">
                            <ul>
                                <li><span>2021 - 2022</span><br/>Internship at Eutech in Backend Web Development</li>
                                <li><span>2021</span><br/>Internship at Eutech in Web Integrating</li>
                                <li><span>2020</span><br/>Internship at GROUPE SOUFFLET in Web Development</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>MSC1 in progress</span><br/>Supinfo</li>
                                <li><span>BENG3</span><br/>Supinfo</li>
                                <li><span>ASC2</span><br/>Supinfo</li>
                                <li><span>ASC1</span><br/>Supinfo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
