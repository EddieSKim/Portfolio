import React, { useState } from "react";
import { Tabs, Tab, Chip, useMediaQuery } from "@mui/material";
import "./WorkStyle.css";

function Work() {
    const [tabValue, setTabValue] = useState(0);
    const smallMediaScreen = useMediaQuery("(max-width: 500px");

    const handleTabChange = (event, value) => {
        setTabValue(value);
    }

    return (
        <div className="work-section" id="work">
            <h2 className="work-title"><span>Work Experience</span></h2>
            <div className="work-wrapper">
                <Tabs
                    orientation={smallMediaScreen ? "horizontal" : "vertical"}
                    value={tabValue}
                    onChange={handleTabChange}>
                    <Tab label="SkipTheDishes" />
                </Tabs>
                {tabValue === 0 && <>
                    <div className="experience-ctn">
                        <h3>Software Engineer Co-op | SkipTheDishes</h3>
                        <span>August 2021 - August 2022</span>
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
                                <Chip className="tech-chip" label="Javascript" />
                                <Chip className="tech-chip" label="Typescript" />
                                <Chip className="tech-chip" label="Java" />
                                <Chip className="tech-chip" label="HTML" />
                                <Chip className="tech-chip" label="CSS" />
                                <Chip className="tech-chip" label="React" />
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}

export default Work;