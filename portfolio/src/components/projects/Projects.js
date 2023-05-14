import React, { useState } from "react";
import { Tabs, Tab, Chip, Grid } from "@mui/material";
import motivHome from "../../images/projectImages/motivOptimize/motiv-home.png"
import motivScreen from "../../images/projectImages/motivOptimize/motiv-screen.png"
import motivNewCampaign from "../../images/projectImages/motivOptimize/motiv-newCampaign.png"
import motivDashboard from "../../images/projectImages/motivOptimize/motiv-dashboard.png"
import "./ProjectStyle.css"
import Carousel from 'react-material-ui-carousel'

const motivList = [
    {
        label: "motiv-home",
        imgPath: motivHome,
    },
    {
        label: "motiv-screen",
        imgPath: motivScreen,
    },
    {
        label: "motiv-new",
        imgPath: motivNewCampaign,
    },
    {
        label: "motiv-dashboard",
        imgPath: motivDashboard,
    },
]

const portfolioList = [
    {
        label: "portfolio-home",
    }
]

function Projects() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, value) => {
        setTabValue(value)
    }

    return (
        <div className="project-section" id="projects">
            <h2 className="project-title"><span>Projects</span></h2>
            <div className="project-wrapper">
                <Tabs
                    variant="fullWidth"
                    orientation="vertical"
                    value={tabValue}
                    onChange={handleTabChange}>
                    <Tab label="Motiv-Optimize" />
                    <Tab label="Portfolio" />
                </Tabs>
                {tabValue === 0 && <>
                    <div className="project-info" id="motiv">
                        <Carousel >
                            {
                                motivList.map((image) => (
                                    <img className="proj-img" src={image.imgPath} alt="screenshots" />
                                ))
                            }
                        </Carousel>
                        <h3>Motiv-Optimize | University of Calgary</h3>
                        <span>Sept 2022 - Apr 2023</span>
                        <div>
                            <ul>
                                <li>
                                    Collaborated with a team and industry sponsor, <span>Motiv Digital</span>, to develop an application that helps marketing teams create efficient campaigns and websites by leveraging the power of Multi Armed Bandit algorithm
                                </li>
                                <li>
                                    Won 2nd place at the Schulich School of Engineering design fair in the software category
                                </li>
                            </ul>
                            <div>
                                <h4>Technologies Used</h4>
                                <Grid container spacing={1}>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="Typescript" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="Javascript" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="Material-UI" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="NextJs" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="Chart.js" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="Vercel" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="HTML" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="CSS" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </>}
                {tabValue === 1 && <>
                    <div className="project-info" id="portfolio">
                        <Carousel>

                        </Carousel>
                        <h3>Portfolio</h3>
                        <span>May 2023 - Current</span>
                        <div>
                            <ul>
                                <li>
                                    The objective of this project was to create a place to organize and showcase my work experiences and projects.
                                </li>
                                <li>
                                    Currently(2023) there isn't much content, but hopefully it continues to grow as develop more projects and gain more experience.
                                </li>
                            </ul>
                            <div>
                                <h4>Technologies Used</h4>
                                <Grid container>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="Javascript" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="HTML" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="CSS" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="React" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Chip className="tech-chip" label="Material-UI" />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}

export default Projects;