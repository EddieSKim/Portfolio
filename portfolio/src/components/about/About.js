import React from "react";
import "./AboutStyle.css";
import { Chip } from "@mui/material";

const skills = [
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "React",
    "Nextjs",
    "Python",
    "Java",
    "C++",
    "MySQL"
]

function About() {

    return (
        <div className="about-section" id="about">
            <h2 className="about-title"><span>About me</span></h2>
            <div className="content-body">
                <div className="body-text">
                    <p>
                        Hello there! I am Eddie Kim and I've recently graduated from University of Calgary as a software engineer.
                    </p>
                    <p>
                        I am currently seeking an entry level position in software development.
                    </p>
                    <p>
                        I enjoy problem solving, exercising, playing video games (mostly FPS), and drawing.
                    </p>
                    <h4 className="skills-title">Skills & Experience</h4>
                    <div className="skills-wrapper">
                        {
                            skills.map((skill, index) => {
                                return (
                                    <Chip
                                        className="skill-icon"
                                        label={skill}
                                        key={`skill${index}`}
                                        sx={{ backgroundColor: "#f5f5dc" }} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;