import React, { useState } from "react";
import { Tabs, Tab, Chip, useMediaQuery } from "@mui/material";
import "./WorkStyle.css";

const skipTech = [
    "Javascript",
    "Typescript",
    "Java",
    "HTML",
    "CSS",
    "React",
]

function Work() {
    const [tabValue, setTabValue] = useState(0);
    const smallMediaScreen = useMediaQuery("(max-width: 500px");

    const handleTabChange = (event, value) => {
        setTabValue(value);
    }

    return (
        <div className="work-section" id="work">
            <h2 className="work-title">Work Experience</h2>
            <div className="work-wrapper">
                <Tabs
                    TabIndicatorProps={{ style: { backgroundColor: "#79cdbf", width: "5px" } }}
                    textColor="inherit"
                    orientation={smallMediaScreen ? "horizontal" : "vertical"}
                    value={tabValue}
                    onChange={handleTabChange}>
                    <Tab label={<span style={{ color: "#79cdbf", fontFamily: "Nunito, sans serif" }}>SkipTheDishes</span>} />
                </Tabs>
                {tabValue === 0 && <>
                    <div className="experience-ctn">
                        <h3 className="experience-title">Software Engineer Co-op | SkipTheDishes</h3>
                        <span className="experience-info">August 2021 - August 2022</span>
                        <div className="experience-info">
                            <ul>
                                <li>
                                    Developed, maintained, and shipped production code for the Courier Portal
                                </li>
                                <li>
                                    Revised and shipped Jet Pie project to include a new feature on a text input component
                                </li>
                                <li>
                                    Replaced the pre-existing payment api to the new payment solution api and sped up loading time by seconds
                                </li>
                            </ul>
                            <div className="tech-ctn">
                                {
                                    skipTech.map((tech, index) => {
                                        return (
                                            <Chip
                                                className="tech-chip"
                                                label={tech}
                                                key={index}
                                                sx={{ backgroundColor: "#79cdbf" }} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}

export default Work;