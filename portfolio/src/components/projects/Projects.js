import React, { useState, useEffect, useRef } from "react";
import {
    Tabs,
    Tab,
    IconButton,
    Tooltip,
} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./projects.module.css";
import { motion, useAnimation, useInView } from 'framer-motion';
import TechChip from "../techChip/techChip";
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import projectsData from './projectsData.json';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            id={`simple-tabpanel-${index}`}
            role="tabpanel"
            hidden={value !== index}
            {...other}>
            {
                value === index && (
                    <div className={styles.projectInfo}>
                        {
                            children && children.imageLink && (
                                <img
                                    className={styles.projectImg}
                                    loading="lazy"
                                    src={children.imageLink.highRes}
                                    alt="project-img" />
                            )
                        }
                        <h2 className={styles.projectTitle}>
                            {children.title}
                        </h2>
                        <span>
                            {children.projectDate} |
                            <Tooltip title={children.toolTip.repoToolTip} placement="bottom">
                                <IconButton
                                    href={children.links.repoLink}
                                    target="./"
                                    children={<FolderIcon />} />
                            </Tooltip>
                            <Tooltip title={children.toolTip.externalToolTip} placement="bottom">
                                <IconButton
                                    href={children.links.externalLink}
                                    target="./"
                                    children={<ScreenshotMonitorIcon />} />
                            </Tooltip>
                        </span>
                        <div className={styles.projectContent}>
                            <ul>
                                {
                                    children && children.descriptions && (
                                        children.descriptions.map((description, index) => {
                                            return (
                                                <li key={index}>
                                                    {description}
                                                </li>
                                            )
                                        })
                                    )
                                }
                            </ul>
                            <div>
                                <h4>Technologies Used</h4>
                                <div>
                                    {
                                        children.tech.map((tech, index) => {
                                            return (
                                                <TechChip key={index} props={{ tech: tech, backColor: "#f5f5dc" }} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

function Projects() {
    const [tabValue, setTabValue] = useState(0);
    const smallMediaScreen = window.matchMedia("(max-width: 500px)").matches;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    const handleTabChange = (event, value) => {
        setTabValue(value);
    }

    return (
        <div className={styles.projectContainer} id="projects">
            <motion.h2
                className={styles.projectHeader}
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5 }}>
                Projects
            </motion.h2>
            <motion.div
                className={styles.projectsWrapper}
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.75, delay: 0.25 }}>
                <Tabs
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    sx={{ width: smallMediaScreen ? "90%" : "51%" }}
                    TabIndicatorProps={{ style: { backgroundColor: "black" } }}
                    textColor="inherit"
                    indicatorColor="inherit"
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    value={tabValue}
                    onChange={handleTabChange}>
                    {
                        projectsData.projectTitles.map((projName, index) =>
                            <Tab key={index}
                                label={
                                    <span className={styles.tabLabel}>
                                        {projName}
                                    </span>
                                } />
                        )
                    }
                </Tabs>
                <motion.div
                    className={styles.projectWrapper}
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.75, delay: 0.25 }}>
                    {
                        projectsData.projectsInfo.map((project, index) => (
                            <CustomTabPanel key={index}
                                value={tabValue}
                                index={index}
                                children={project} />
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Projects;