import React from "react";
import { Link } from 'react-scroll'
import HomeIcon from '@mui/icons-material/Home';
import PortraitIcon from '@mui/icons-material/Portrait';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LaptopIcon from '@mui/icons-material/Laptop';
import './NavBarStyle.css';
import { Grid, Button } from "@mui/material";

function NavBar() {
    return (
        <>
            <div className="nav-ctn">
                <div className="logo">
                    <p>
                        Eddie Kim
                    </p>
                </div>
                <div className="navMenu">
                    <Grid container>
                        <Grid item>
                            <Button>
                                <Link
                                    to="banner"
                                    smooth={true}
                                    duration={300}
                                >
                                    <HomeIcon />
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={300}
                                >
                                    <PortraitIcon />
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={300}
                                >
                                    <AssignmentIcon />
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button>
                                <Link
                                    to="work"
                                    smooth={true}
                                    duration={300}
                                >
                                    <LaptopIcon />
                                </Link>
                            </Button>

                        </Grid>
                        <Grid item>
                            <Button>
                                <Link
                                    to="contacts"
                                    smooth={true}
                                    duration={300}
                                >
                                    <PermContactCalendarIcon />
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );

}

export default NavBar;