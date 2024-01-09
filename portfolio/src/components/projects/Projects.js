import React, { useState, useEffect, useRef } from "react";
import {
    Tabs,
    Tab,
    Chip,
    IconButton,
    Tooltip,
} from "@mui/material";
import motivHome from "../../images/projectImages/motivOptimize/motiv-home.png";
import motivHomeLowres from "../../images/projectImages/motivOptimize/motiv-home-lowres.jpg";
import portfolioBanner from "../../images/projectImages/portfolio/banner.png";
import portfolioBannerLowres from "../../images/projectImages/portfolio/banner-lowres.jpg";
import portfoliov1 from "../../images/projectImages/portfoliov1/portfoliov1.png";
import portfoliov1Lowres from "../../images/projectImages/portfoliov1/portfoliov1-lowres.jpg";
import weatherAppMainLight from "../../images/projectImages/weatherApp/weatherAppMainLight.png"
import FolderIcon from '@mui/icons-material/Folder';
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./projects.module.css";
import { motion, useAnimation, useInView } from 'framer-motion';
import TechChip from "../techChip/techChip";

const motivTech = [
    "TypeScript",
    "JavaScript",
    "Material-UI",
    "NextJs",
    "Chart.js",
    "Vercel",
    "HTML",
    "CSS",
    "Python",
    "AWS",
]

const portfolioV2Tech = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Material-UI",
    "Vercel"
]

const portfolioV1Tech = [
    "JQuery",
    "HTML",
    "CSS",
]

const weatherAppTech = [
    "HTML",
    "CSS",
    "JavaScript",
    "Material-UI",
    "React",
    "Vercel"
]

const projTitles = [
    "Weather App",
    "Portfolio V2",
    "Motiv-Optimize",
    "Portfolio V1"
]

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
                        projTitles.map((projName, index) =>
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
                        tabValue === 0 &&
                        <div className={styles.projectInfo} id="weather-app">
                            <LazyLoadImage
                                className={styles.projectImg}
                                src={weatherAppMainLight}
                                placeholderSrc={portfolioBannerLowres}
                                alt="portfolioBanner"
                                effect="blur" />
                            <h2 className={styles.projectTitle}>
                                <a
                                    style={{ textDecoration: "none" }}
                                    href="https://weather-app-eddie.vercel.app/"
                                    target="./">
                                    Weather App
                                </a>
                            </h2>
                            <span>Dec 2023 |
                                <Tooltip title="Source Code" placement="right">
                                    <IconButton
                                        href="https://github.com/EddieSKim/WeatherApp/tree/main/weatherapp"
                                        target="./"
                                        children={<FolderIcon />} />
                                </Tooltip>
                            </span>
                            <div className={styles.projectContent}>
                                <ul>
                                    <li>
                                        Weather app was created to provide users with accurate information about
                                        current weather conditions and forecasts for specified location
                                    </li>
                                    <li>
                                        It offers features such as city search bar with suggestions, current temperature, humidity,
                                        hourly forecast, weekly forecast, light/dark theme switch and more
                                    </li>
                                    <li>
                                        Used open weather map api and maptiler api for location searching and location weather
                                    </li>
                                </ul>
                                <div>
                                    <h4>Technologies Used</h4>
                                    <div>
                                        {
                                            weatherAppTech.map((tech, index) => {
                                                return (
                                                    <TechChip key={index} props={{tech: tech, backColor: "#f5f5dc"}} />
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
                        <div className={styles.projectInfo} id="portfolioV2">
                            <LazyLoadImage
                                className={styles.projectImg}
                                src={portfolioBanner}
                                placeholderSrc={portfolioBannerLowres}
                                alt="portfolioBanner"
                                effect="blur" />
                            <h2
                                className={styles.projectTitle}>
                                <a
                                    style={{ textDecoration: "none" }}
                                    href="https://eddiekim.vercel.app/"
                                    target="./">
                                    Portfolio V2
                                </a>
                            </h2>
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
                                                    <TechChip key={index} props={{tech: tech, backColor: "#f5f5dc"}} />
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
                        <div className={styles.projectInfo} id="motiv">
                            <LazyLoadImage
                                className={styles.projectImg}
                                src={motivHome}
                                placeholderSrc={motivHomeLowres}
                                alt="motiv-home"
                                effect="blur" />
                            <h2 className={styles.projectTitle}>
                                <a
                                    style={{ textDecoration: "none" }}
                                    href="https://motiv-optimize.vercel.app/"
                                    target="./">
                                    Motiv-Optimize
                                </a>
                            </h2>
                            <span>Sept 2022 - Apr 2023 |
                                <Tooltip title="Poster" placement="right">
                                    <IconButton
                                        href="https://schulich.ucalgary.ca/sites/default/files/teams/4/52099-Motiv%20Optimize%20ENG%2024%20Booth%2036.pdf"
                                        target="./"
                                        children={<FolderIcon />} />
                                </Tooltip>
                            </span>
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
                                                    <TechChip key={index} props={{tech: tech, backColor: "#f5f5dc"}}/>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        tabValue === 3 &&
                        <div className={styles.projectInfo} id="portfolioV1">
                            <LazyLoadImage
                                className={styles.projectImg}
                                src={portfoliov1}
                                placeholderSrc={portfoliov1Lowres}
                                alt="portfoliov1"
                                effect="blur" />
                            <h2 className={styles.projectTitle}>
                                <a
                                    style={{ textDecoration: "none" }}
                                    href="https://eddieskim.github.io/html/index.html"
                                    target="./">
                                    Portfolio V1
                                </a>
                            </h2>
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
                                                    <TechChip key={index} props={{tech: tech, backColor: "#f5f5dc"}}/>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Projects;