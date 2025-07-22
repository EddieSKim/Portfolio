import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import styles from "./About.module.css";
import { motion, useAnimation, useInView } from 'framer-motion';
import Certificates from "./certification";
import TechChip from "../techChip/techChip";

const skills = [
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Python",
    "Java",
    "C++",
    "MySQL",
    "SOQL",
    "Apex",
    "Lightning Web Component",
    "Salesforce"

]

const certificateList = [
    {
        name: "Meta: Introduction to Front-End Development",
        date: "01, 08, 2024",
        provider: "Coursera",
    },
    {
        name: "IBM: Developing Back-End Apps with Node.js and Express",
        date: "01, 06, 2024",
        provider: "Coursera",
    },
    {
        name: "Responsive Web Design",
        date: "09, 27, 2023",
        provider: "Freecodecamp",
    },
    {
        name: "JavaScript Algorithms and Data Structures",
        date: "06, 15, 2023",
        provider: "Freecodecamp",
    }
]

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <div className={styles.aboutSection} id="about">
            <motion.h2
                ref={ref}
                className={styles.aboutTitle}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5 }}
            >About Me
            </motion.h2>
            <motion.div ref={ref}
                className={styles.contentBody}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.75, delay: 0.25 }}>
                <div className={styles.bodyText}>
                    <p>
                        Hi, I’m Eddie Kim, a curious and driven software developer with a passion for building practical solutions that make life easier for users and teams alike.
                    </p>
                    <p>
                        I recently worked as a Junior Product Developer at Traction Rec, where I contributed to the development of a new Salesforce-based Payment App used by 10+ organizations. 
                        From designing core features in Apex, Lightning Web Components, and SOQL to debugging customer-specific issues, I thrive in full-stack environments where problem-solving and clean code come together.
                    </p>
                    <p>
                        Before that, I interned at SkipTheDishes, where I gained hands-on experience working with React, improving internal tools, and testing mission-critical systems.
                    </p>
                    <p>
                        If you're seeking a motivated and versatile software developer, let's connect! I'm excited to explore how my skills and passion align with
                        opportunities in the world of technology.
                    </p>
                    <h4 className={styles.skillsTitle}>Technologies I'm familiar with:</h4>
                    <div className={styles.skillsWrapper}>
                        {
                            skills.map((skill, index) => {
                                return (
                                    <TechChip key={index} props={{ tech: skill, backColor: "#f5f5dc" }} />
                                );
                            })
                        }
                    </div>
                    <motion.div
                        ref={ref}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.5 }}>
                        <h4 className={styles.skillsTitle}>Certifications</h4>
                        <Grid
                            alignItems="center"
                            justifyContent="center"
                            container
                            rowSpacing={2}
                        >
                            {
                                certificateList.map((certificate, index) => {
                                    return (
                                        <Grid key={index} xs={12} sm={12} md={6} lg={6} xl={3}>
                                            <Certificates props={certificate} />
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
}

export default About;