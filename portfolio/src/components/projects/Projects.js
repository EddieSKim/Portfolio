import React, { useState } from "react";
import {
    Tabs,
    Tab,
    Chip,
    useMediaQuery,
    IconButton,
    Tooltip
} from "@mui/material";
import motivHome from "../../images/projectImages/motivOptimize/motiv-home.png";
import motivHomeLowres from "../../images/projectImages/motivOptimize/motiv-home-lowres.jpg";
import portfolioBanner from "../../images/projectImages/portfolio/banner.png";
import portfolioBannerLowres from "../../images/projectImages/portfolio/banner-lowres.jpg";
import portfoliov1 from "../../images/projectImages/portfoliov1/portfoliov1.png";
import portfoliov1Lowres from "../../images/projectImages/portfoliov1/portfoliov1-lowres.jpg";
import "./ProjectStyle.css";
import FolderIcon from '@mui/icons-material/Folder';
import { LazyLoadImage } from "react-lazy-load-image-component";

const motivTech = [
    "Typescript",
    "Javascript",
    "Material-UI",
    "NextJs",
    "Chart.js",
    "Vercel",
    "HTML",
    "CSS",
]

const portfolioV2Tech = [
    "Javascript",
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
    const smallMediaScreen = useMediaQuery("max-width: 500px");

    const handleTabChange = (event, value) => {
        setTabValue(value)
    }

    return (
        <div className="project-section" id="projects">
            <h2 className="project-title"><span>Projects</span></h2>
            <div className="project-wrapper">
                <Tabs
                    TabIndicatorProps={{ style: { backgroundColor: "black", width: "5px" } }}
                    textColor="inherit"
                    indicatorColor="inherit"
                    variant="fullWidth"
                    orientation={smallMediaScreen ? "horizontal" : "vertical"}
                    value={tabValue}
                    onChange={handleTabChange}>
                    <Tab label={<span style={{fontFamily: "Nunito, sans serif"}}>Portfolio V2</span>} />
                    <Tab label={<span style={{fontFamily: "Nunito, sans serif"}}>Motiv-Optimize</span>} />
                    <Tab label={<span style={{fontFamily: "Nunito, sans serif"}}>Portfolio V1</span>} />
                </Tabs>
                {
                    tabValue === 0 &&
                    <>
                        <div className="project-info" id="portfolio">
                            <div className="card">
                                <LazyLoadImage
                                    className="proj-img"
                                    src={portfolioBanner}
                                    placeholderSrc={portfolioBannerLowres}
                                    alt="portfolioBanner"
                                    effect="blur" />
                            </div>
                            <h3>Portfolio V2</h3>
                            <span>May 2023 |
                                <Tooltip title="Src Code" placement="right">
                                    <IconButton
                                        href="https://github.com/EddieSKim/Portfolio"
                                        target="./"
                                        children={<FolderIcon />} />
                                </Tooltip>
                            </span>
                            <div>
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
                                                        className="tech-chip"
                                                        label={tech}
                                                        key={index} />
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    tabValue === 1 &&
                    <>
                        <div className="project-info" id="motiv">
                            <div className="card">
                                <LazyLoadImage
                                    className="proj-img"
                                    src={motivHome}
                                    placeholderSrc={motivHomeLowres}
                                    alt="motiv-home"
                                    effect="blur" />
                            </div>
                            <h3>Motiv-Optimize | University of Calgary</h3>
                            <span>Sept 2022 - Apr 2023</span>
                            <div>
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
                                                        className="tech-chip"
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
                    </>
                }
                {
                    tabValue === 2 &&
                    <>
                        <div className="project-info" id="portfolio">
                            <div className="card">
                                <LazyLoadImage
                                    className="proj-img"
                                    src={portfoliov1}
                                    placeholderSrc={portfoliov1Lowres}
                                    alt="portfoliov1"
                                    effect="blur" />
                            </div>
                            <h3>Portfolio V1</h3>
                            <span>July 2021 |
                                <Tooltip title="Src Code" placement="right">
                                    <IconButton
                                        href="https://github.com/EddieSKim/EddieSKim.github.io"
                                        target="./"
                                        children={<FolderIcon />} />
                                </Tooltip>
                            </span>
                            <div>
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
                                                        className="tech-chip"
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
                    </>
                }
            </div>
        </div>
    );
}

export default Projects;