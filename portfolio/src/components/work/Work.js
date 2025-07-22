import React, { useState, useRef, useEffect } from "react";
import { Tabs, Tab, useMediaQuery } from "@mui/material";
import { motion, useAnimation, useInView } from 'framer-motion';
import styles from "./Work.module.css";
import TechChip from "../techChip/techChip";

const skipTech = [
    "JavaScript",
    "TypeScript",
    "Java",
    "HTML",
    "CSS",
    "React",
]

const tRecTech = [
    "JavaScript",
    "HTML",
    "CSS",
    "Apex",
    "Lightning Web Component",
    "Salesforce",
    "SOQL",
    "Jira"
]

function Work() {
    const [tabValue, setTabValue] = useState(0);
    const smallMediaScreen = useMediaQuery("(max-width: 500px");

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    const handleTabChange = (event, value) => {
        setTabValue(value);
    }

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <div className={styles.workSection} id="work">
            <motion.h2
                className={styles.workTitle}
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5 }}>Work Experience</motion.h2>
            <motion.div
                className={styles.workWrapper}
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.75, delay: 0.25 }}>
                <Tabs
                    TabIndicatorProps={{ style: { backgroundColor: "#79cdbf", width: "5px" } }}
                    textColor="inherit"
                    orientation={smallMediaScreen ? "horizontal" : "vertical"}
                    value={tabValue}
                    onChange={handleTabChange}>
                    <Tab label={<span style={{ color: "#79cdbf", fontFamily: "Nunito, sans serif" }}>Traction Rec</span>} />
                    <Tab label={<span style={{ color: "#79cdbf", fontFamily: "Nunito, sans serif" }}>SkipTheDishes</span>} />
                </Tabs>
                {tabValue === 0 && <>
                    <div className={styles.experienceCtn}>
                        <h3 className={styles.experienceTitle}>Junior Product Developer | Traction Rec</h3>
                        <span className={styles.experienceInfo}>April 2024 - July 2025</span>
                        <div className={styles.experienceDescription}>
                            At Traction Rec, I worked on building a brand new feature on the company product, Payment App, used by 10+ organizations, replacing a legacy version.
                            I developed core features using Apex, Lightning Web Components (LWC), and SOQL, collaborating closely with designers, QA, and stakeholders to ship production-ready code.
                        </div>
                        <div>Highlights Include:</div>
                        <div className={styles.experienceInfo}>
                            <ul>
                                <li>
                                    Spearheading the Account Credits and Default Payment Method features to align with customer workflows
                                </li>
                                <li>
                                    Helping reduce open support cases from 180+ to under 150 as part of a company-wide quality initiative
                                </li>
                                <li>
                                    Debugging and resolving customer-specific issues to improve overall product reliability and trust
                                </li>
                                <li>
                                    During internal R&D days, I built and released two enhancements to an internal developer tool that improved usability for our dev team
                                </li>
                            </ul>
                            <h4>Competencies</h4>
                            <div className={styles.techCtn}>
                                {
                                    tRecTech.map((tech, index) => {
                                        return (
                                            <TechChip key={index} props={{tech: tech, backColor: "#79cdbf"}} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </>}
                {tabValue === 1 && <>
                    <div className={styles.experienceCtn}>
                        <h3 className={styles.experienceTitle}>Software Engineer Co-op | SkipTheDishes</h3>
                        <span className={styles.experienceInfo}>August 2021 - August 2022</span>
                        <div className={styles.experienceDescription}>
                            At SkipTheDishes, I worked on maintaining and improving the Courier Portal, enhancing the user experience for the couriers using the application.  
                        </div>
                        <div>Highlights Include:</div>
                        <div className={styles.experienceInfo}>
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
                            <h4>Competencies</h4>
                            <div className={styles.techCtn}>
                                {
                                    skipTech.map((tech, index) => {
                                        return (
                                            <TechChip key={index} props={{tech: tech, backColor: "#79cdbf"}} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </>}
            </motion.div>
        </div>
    );
}

export default Work;