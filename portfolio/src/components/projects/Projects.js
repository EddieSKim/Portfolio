import React, { useState } from "react";
import {
    Tabs,
    Tab,
    Chip,
    useMediaQuery,
    IconButton,
    Tooltip,
} from "@mui/material";
import motivHome from "../../images/projectImages/motivOptimize/motiv-home.png";
import motivHomeLowres from "../../images/projectImages/motivOptimize/motiv-home-lowres.jpg";
import portfolioBanner from "../../images/projectImages/portfolio/banner.png";
import portfolioBannerLowres from "../../images/projectImages/portfolio/banner-lowres.jpg";
import portfoliov1 from "../../images/projectImages/portfoliov1/portfoliov1.png";
import portfoliov1Lowres from "../../images/projectImages/portfoliov1/portfoliov1-lowres.jpg";
import FolderIcon from '@mui/icons-material/Folder';
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./projects.module.css";

const motivTech = [
    "TypeScript",
    "JavaScript",
    "Material-UI",
    "NextJs",
    "Chart.js",
    "Vercel",
    "HTML",
    "CSS",
]

const portfolioV2Tech = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Material-UI",
]

const portfolioV1Tech = [
    "JQuery",
    "HTML",
    "CSS",
]

function Projects() {
    const [tabValue, setTabValue] = useState(0);
    const smallMediaScreen = window.matchMedia("(max-width: 500px)").matches;

    const handleTabChange = (event, value) => {
        setTabValue(value)
    }

    return (
        <div className={styles.projectContainer} id="projects">
            <h2 className={styles.projectTitle}>Projects</h2>
            <Tabs
                sx={{ width: smallMediaScreen ?  "90%" : "50%" }}
                //TabIndicatorProps={{ style: { backgroundColor: "black", width: "5px" } }}
                textColor="inherit"
                indicatorColor="inherit"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                value={tabValue}
                onChange={handleTabChange}>
                <Tab label={<span style={{ fontFamily: "Nunito, sans serif" }}>Portfolio V2</span>} />
                <Tab label={<span style={{ fontFamily: "Nunito, sans serif" }}>Motiv-Optimize</span>} />
                <Tab label={<span style={{ fontFamily: "Nunito, sans serif" }}>Portfolio V1</span>} />
            </Tabs>
            <div className={styles.projectWrapper}>
                {
                    tabValue === 0 &&
                    <div className={styles.projectInfo} id="portfolio">
                        <LazyLoadImage
                            className={styles.projectImg}
                            src={portfolioBanner}
                            placeholderSrc={portfolioBannerLowres}
                            alt="portfolioBanner"
                            effect="blur" />
                        <h3>Portfolio V2</h3>
                        <span>May 2023 |
                            <Tooltip title="Source Code" placement="right">
                                <IconButton
                                    href="https://github.com/EddieSKim/Portfolio"
                                    target="./"
                                    children={<FolderIcon />} />
                            </Tooltip>
                        </span>
                        <div className={styles.projectContent}>
                            <ul>
                                <li>
                                    The objective of this project was to create a place to organize and showcase my work experiences and projects.
                                </li>
                                <li>
                                    This page will continue to grow as I develop more projects and gain more experience.
                                </li>
                            </ul>
                            <div>
                                <h4>Technologies Used</h4>
                                <div>
                                    {
                                        portfolioV2Tech.map((tech, index) => {
                                            return (
                                                <Chip
                                                    sx={{ backgroundColor: "#f5f5dc" }}
                                                    className={styles.techChip}
                                                    label={tech}
                                                    key={index} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    tabValue === 1 &&
                    <div className={styles.projectInfo} id="motiv">
                        <LazyLoadImage
                            className={styles.projectImg}
                            src={motivHome}
                            placeholderSrc={motivHomeLowres}
                            alt="motiv-home"
                            effect="blur" />
                        <h3>Motiv-Optimize |
                            University of Calgary |
                            <Tooltip title="Poster" placement="right">
                                <IconButton
                                    href="https://schulich.ucalgary.ca/sites/default/files/teams/4/52099-Motiv%20Optimize%20ENG%2024%20Booth%2036.pdf"
                                    target="./"
                                    children={<FolderIcon />} />
                            </Tooltip></h3>
                        <span>Sept 2022 - Apr 2023</span>
                        <div className={styles.projectContent}>
                            <ul>
                                <li>
                                    Collaborated with a team and industry sponsor, <span>Motiv Digital</span>, to develop an application that helps marketing teams create efficient campaigns and websites by leveraging the power of Multi Armed Bandit algorithm
                                </li>
                                <li>
                                    Placed <b>2nd</b> at the Schulich School of Engineering design fair in the software category
                                </li>
                            </ul>
                            <div>
                                <h4>Technologies Used</h4>
                                <div>
                                    {
                                        motivTech.map((tech, index) => {
                                            return (
                                                <Chip
                                                    className={styles.techChip}
                                                    label={tech}
                                                    key={index}
                                                    sx={{ backgroundColor: "#f5f5dc" }} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    tabValue === 2 &&
                    <div className={styles.projectInfo} id="portfolio">
                        <LazyLoadImage
                            className={styles.projectImg}
                            src={portfoliov1}
                            placeholderSrc={portfoliov1Lowres}
                            alt="portfoliov1"
                            effect="blur" />
                        <h3>Portfolio V1</h3>
                        <span>July 2021 |
                            <Tooltip title="Source Code" placement="right">
                                <IconButton
                                    href="https://github.com/EddieSKim/EddieSKim.github.io"
                                    target="./"
                                    children={<FolderIcon />} />
                            </Tooltip>
                        </span>
                        <div className={styles.projectContent}>
                            <ul>
                                <li>
                                    Created a simple web application to learn the basics of HTML and CSS.
                                </li>
                                <li>
                                    It includes a home page, academic projects page, personal projects page and a list on contacts.
                                </li>
                            </ul>
                            <div>
                                <h4>Technologies Used</h4>
                                <div>
                                    {
                                        portfolioV1Tech.map((tech, index) => {
                                            return (
                                                <Chip
                                                    className={styles.techChip}
                                                    label={tech}
                                                    key={index}
                                                    sx={{ backgroundColor: "#f5f5dc" }} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Projects;