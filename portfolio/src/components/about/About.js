import React from "react";
import "./AboutStyle.css";
import picture from "../../images/ProfileCharacter.png"
import { TypeAnimation } from "react-type-animation";

function About() {

    return (
        <div className="about-section" id="about">
            <h2 className="about-title"><span>About me</span></h2>
            <div className="content-body">
                <div>
                    <div className="speech-bubble">
                        <div className="title">
                            <TypeAnimation
                                sequence={[
                                    "Hello there",
                                    2000,
                                    "I'm Eddie",
                                    4000
                                ]}
                                speed={80}
                                wrapper="span" />
                        </div>
                    </div>
                    <img className="profile-img" src={picture} alt="profile" />
                </div>
                <div className="">
                    <p>
                        I've recently completed my Bachelors from University of Calgary in Software Engineering
                    </p>
                    <p>
                        I am most interested in Frontend development. 
                    </p>
                    <p>
                        I like exercising, playing video games (mostly FPS), 
                    </p>
                    <h4 id="skills-title">Skills & Experience</h4>
                    <ul>
                        <li>
                            Javascript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Nextjs
                        </li>
                        <li>
                            Java
                        </li>
                        <li>
                            C++
                        </li>
                        <li>
                            Python
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;