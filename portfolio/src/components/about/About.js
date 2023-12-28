import React, { useEffect, useRef } from "react";
import { Chip } from "@mui/material";
import styles from "./About.module.css";
import { motion, useAnimation, useInView } from 'framer-motion';

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
    "MySQL"
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
                        Hello there! I am Eddie Kim and I've recently graduated from University of Calgary as a software engineer.
                    </p>
                    <p>
                        I am currently seeking an entry/junior level position in software development.
                    </p>
                    <p>
                        I enjoy problem solving, exercising, playing video games (mostly FPS), and drawing.
                    </p>
                    <h4 className={styles.skillsTitle}>Skills & Experience</h4>
                    <div className={styles.skillsWrapper}>
                        {
                            skills.map((skill, index) => {
                                return (
                                    <Chip
                                        className={styles.skillIcon}
                                        label={skill}
                                        key={`skill${index}`}
                                        sx={{
                                            backgroundColor: "#f5f5dc",
                                            fontSize: "1rem",
                                        }} />
                                );
                            })
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default About;