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
    "Node.js",
    "Express"
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
                        Hello there! I'm Eddie, software engineering graduate
                        passionate about crafting innovative solutions and making a meaningful impact through technology.
                    </p>
                    <p>
                        As I embark on this exciting phase of transitioning from academia to industry, I'm eager to channel my
                        enthusiasm, adaptability, and hunger for learning into professional settings. I am committed to continuous
                        growth, eagerly embracing opportunities to expand my skill set and stay abreast of the latest industry trends
                        and technologies.
                    </p>
                    <p>
                        I thrive on challenges and am excited about the prospect of contributing my creativity and dedication to
                        projects that push boundaries and solve real-world problems.
                    </p>
                    <p>
                        If you're seeking a motivated and versatile software engineering graduate ready to embark on a journey of
                        learning and contribution, let's connect! I'm excited to explore how my skills and passion align with
                        opportunities in the world of technology.
                    </p>
                    <h4 className={styles.skillsTitle}>Technologies I'm familar with:</h4>
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