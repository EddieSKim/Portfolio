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
]

function About() {

    return (
        <div className="about-section" id="about">
            <h2 className="about-title"><span>About me</span></h2>
            <div className="content-body">
                <div className="body-text">
                    <p>
                        Hello there! I am Eddie Kim and I've recently graduated npm from University of Calgary as a software engineer.
                    </p>
                    <p>
                        I am most interested in Frontend development. I even did an internship as well as a front end developer! Currently seeking an entry level position in software development.
                    </p>
                    <p>
                        I enjoy exercising, playing video games (mostly FPS), and drawing.
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