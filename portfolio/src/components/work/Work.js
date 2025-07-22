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
                {tabValue === 1 && <>
                    <div className={styles.experienceCtn}>
                        <h3 className={styles.experienceTitle}>Software Engineer Co-op | SkipTheDishes</h3>
                        <span className={styles.experienceInfo}>August 2021 - August 2022</span>
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
                {tabValue === 0 && <>
                    <div className={styles.experienceCtn}>
                        <h3 className={styles.experienceTitle}>Junior Product Developer | Traction Rec</h3>
                        <span className={styles.experienceInfo}>April 2024 - July 2025</span>
                        <div className={styles.experienceInfo}>
                            <ul>
                                <li>
                                    Contributed to the design and development of a new Payment App, replacing the legacy version used by 10+ customer orgs
                                </li>
                                <li>
                                    Developed 3+ core features within the Payment App using Apex, LWC, and SOQL, collaborating with cross functional teams for integration and release
                                </li>
                                <li>
                                    Spearheaded the Account Credits and Default Payment Method features tailored to customer day to day workflows
                                </li>
                                <li>
                                    Provided ongoing customer support, including debugging and root cause analysis on customer-specific product issues
                                </li>
                                <li>
                                    Contributed to a company-wide support effort, helping reduce open customer cases from 180+ to under 150 by investigating and resolving product issues and concerns
                                </li>
                                <li>
                                    Built and released 2 enhancements to an internal developer tool during R&D days, improving usability for the development team
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
            </motion.div>
        </div>
    );
}

export default Work;