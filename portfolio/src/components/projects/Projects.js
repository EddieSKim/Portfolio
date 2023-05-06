import React, { useState } from "react";
import { Grid, Tabs, Tab } from "@mui/material";
import motiv from "../../images/motiv-screen.png"
import "./ProjectStyle.css"

function Projects() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, value) => {
        setTabValue(value)
    }

    return (
        <div className="section" id="projects">
            <h2>Projects</h2>
            <div className="project-ctn">
                <Tabs
                    variant="fullWidth"
                    orientation="vertical"
                    value={tabValue}
                    onChange={handleTabChange}>
                    <Tab label="Motiv-Optimize" />
                    <Tab label="Portfolio" />
                </Tabs>
                {tabValue === 0 && <>
                    <div className="project-info">
                        <h3>Motiv-Optimize</h3>
                        <span>Sept 2022 - Apr 2023</span>
                        <div>
                            {/* <img className="proj-img" src={motiv} alt={"motiv"} /> */}
                            <ul>
                                <li>
                                    Collaborated with a team to develop an application that helps marketing teams create efficient campaigns and websites by leveraging the power of Multi Armed Bandit algorithm
                                </li>
                                <li>
                                    Won 2nd place at the Schulich School of Engineering design fair in the software category
                                </li>
                            </ul>
                        </div>
                    </div>
                </>}
                {tabValue === 1 && <>
                    <div className="project-info">
                        <h3>Portfolio</h3>
                        <div>
                            <ul>
                                <li>
                                    Created a website to organize
                                </li>
                            </ul>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}

export default Projects;