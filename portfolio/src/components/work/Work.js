import React, { useState } from "react";
import { Tabs, Tab, Chip } from "@mui/material";
import "./WorkStyle.css";

function Work() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, value) => {
        setTabValue(value);
    }

    return (
        <div className="work-section" id="work">
            <h2 className="work-title"><span>Work Experience</span></h2>
            <div className="work-wrapper">
                <Tabs orientation="vertical" value={tabValue} onChange={handleTabChange}>
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
                                <Chip label="Javascript" />
                                <Chip label="Typescript" />
                                <Chip label="Java" />
                                <Chip label="HTML" />
                                <Chip label="CSS" />
                                <Chip label="React" />
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}

export default Work;