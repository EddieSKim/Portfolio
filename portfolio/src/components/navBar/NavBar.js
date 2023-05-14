import React from "react";
import { Link } from 'react-scroll'
import HomeIcon from '@mui/icons-material/Home';
import PortraitIcon from '@mui/icons-material/Portrait';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LaptopIcon from '@mui/icons-material/Laptop';
import './NavBarStyle.css';
import { Grid, Button, Tooltip } from "@mui/material";

function NavBar() {
    return (
        <div className="nav-ctn">
            <div className="logo">
                <Button sx={{ color: "white" }}>
                    <Link
                        to="banner"
                        smooth={true}
                        duration={300}
                    >
                        Eddie.
                    </Link>
                </Button>
            </div>
            <div className="navMenu">
                <Grid container>
                    <Grid item>
                        <Tooltip title="About Me">
                            <Button>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={300}
                                >
                                    <PortraitIcon className="nav-icon" />
                                </Link>
                            </Button>
                        </Tooltip>

                    </Grid>
                    <Grid item>
                        <Tooltip title="Experience">
                            <Button>
                                <Link
                                    to="work"
                                    smooth={true}
                                    duration={300}
                                >
                                    <LaptopIcon className="nav-icon" />
                                </Link>
                            </Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Projects">
                            <Button>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={300}
                                >
                                    <AssignmentIcon className="nav-icon" />
                                </Link>
                            </Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Contacts">
                            <Button>
                                <Link
                                    to="contacts"
                                    smooth={true}
                                    duration={300}
                                >
                                    <PermContactCalendarIcon className="nav-icon" />
                                </Link>
                            </Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Button sx={{ color: "white" }}>
                            Resume
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );

}

export default NavBar;