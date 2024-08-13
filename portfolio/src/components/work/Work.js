import React, { useState, useRef, useEffect } from "react";
import { Tabs, Tab, useMediaQuery } from "@mui/material";
import { motion, useAnimation, useInView } from 'framer-motion';
import styles from "./Work.module.css";
import TechChip from "../techChip/techChip";

const skipTech = [
    "Javascript",
    "Typescript",
    "Java",
    "HTML",
    "CSS",
    "React",
]

const tRecTech = [

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
                        <span className={styles.experienceInfo}>April 2024 - Current</span>
                        <div className={styles.experienceInfo}>
                            <ul>
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