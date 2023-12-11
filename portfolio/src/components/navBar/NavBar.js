import React, { useState } from "react";
import { Link } from 'react-scroll'
import PortraitIcon from '@mui/icons-material/Portrait';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LaptopIcon from '@mui/icons-material/Laptop';
import { Button, useMediaQuery, AppBar, Toolbar, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logoIcon from "../../images/logo.png"
import fileRef from "../../documents/Resume_EddieKim.pdf";
import styles from "./NavBar.module.css";

function NavBar() {
    const smallMediaScreen = useMediaQuery("(max-width: 500px)");
    const [navIsOpen, setNavIsOpen] = useState(false);

    const handleNavOpen = () => {
        setNavIsOpen(!navIsOpen);
    }

    const closeMenu = () => {
        setNavIsOpen(false);
    }

    const downloadFile = () => {
        const aTag = document.createElement("a");
        aTag.href = fileRef;
        aTag.setAttribute("download", "Resume_EddieKim.pdf");
    }

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: "black", zIndex: "5" }}>
                {
                    !smallMediaScreen ? (
                        <Toolbar className={styles.navContainer}>
                            <Button sx={{ color: "white", marginRight: "auto" }}>
                                <Link
                                    to="banner"
                                    smooth={true}
                                    duration={300}
                                    onClick={closeMenu}
                                >
                                    <img src={logoIcon} alt="logo" style={{ width: "50px" }} />
                                </Link>
                            </Button>
                            <div className={styles.navWrapper}>
                                <Button sx={{ color: "white" }}>
                                    <Link
                                        to="about"
                                        smooth={true}
                                        duration={300}
                                        onClick={closeMenu}
                                    >
                                        <PortraitIcon />
                                    </Link>
                                </Button>
                                <Button sx={{ color: "white" }}>
                                    <Link
                                        to="work"
                                        smooth={true}
                                        duration={300}
                                        onClick={closeMenu}
                                    >
                                        <LaptopIcon />
                                    </Link>
                                </Button>
                                <Button sx={{ color: "white" }}>
                                    <Link
                                        to="projects"
                                        smooth={true}
                                        duration={300}
                                        onClick={closeMenu}
                                    >
                                        <AssignmentIcon />
                                    </Link>
                                </Button>
                                <Button sx={{ color: "white" }}>
                                    <Link
                                        to="contacts"
                                        smooth={true}
                                        duration={300}
                                        onClick={closeMenu}
                                    >
                                        <PermContactCalendarIcon />
                                    </Link>
                                </Button>
                                {/* <Button
                                onClick={downloadFile}
                                sx={{ color: "white" }}>
                                <a href={fileRef}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none", color: "white" }}>
                                    Resume
                                </a>
                            </Button> */}
                            </div>
                        </Toolbar>
                    ) : (
                        <Toolbar className={styles.navToolbar}>
                            <Button sx={{ color: "white", marginRight: "auto" }}>
                                <Link
                                    to="banner"
                                    smooth={true}
                                    duration={300}
                                    onClick={closeMenu}
                                >
                                    <img src={logoIcon} alt="logo" style={{ width: "40px" }} />
                                </Link>
                            </Button>
                            <Button sx={{ color: "white" }}
                                onClick={handleNavOpen}>
                                <MenuIcon />
                            </Button>
                        </Toolbar>
                    )
                }
            </AppBar>
            <Drawer
                PaperProps={{ sx: { width: "20vw" } }}
                open={navIsOpen}
                anchor="right"
                onClose={handleNavOpen}>
                <Button sx={{ color: "black", width: "100%", marginTop: "4px" }}>
                    <Link
                        to="about"
                        smooth={true}
                        duration={300}
                        onClick={closeMenu}
                    >
                        <PortraitIcon />
                    </Link>
                </Button>
                <Button sx={{ color: "black", width: "100%" }}>
                    <Link
                        to="work"
                        smooth={true}
                        duration={300}
                        onClick={closeMenu}
                    >
                        <LaptopIcon />
                    </Link>
                </Button>
                <Button sx={{ color: "black", width: "100%" }}>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={300}
                        onClick={closeMenu}
                    >
                        <AssignmentIcon />
                    </Link>
                </Button>
                <Button sx={{ color: "black", width: "100%" }}>
                    <Link
                        to="contacts"
                        smooth={true}
                        duration={300}
                        onClick={closeMenu}
                    >
                        <PermContactCalendarIcon />
                    </Link>
                </Button>
                {/* <Button
                    onClick={downloadFile}
                    sx={{ color: "white" }}>
                    <a href={fileRef} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "black" }}>
                        Resume
                    </a>
                </Button> */}
                <Button
                    sx={{ color: "black", marginTop: "auto" }}
                    href={`mailto:eddie.s.kim11@gmail.com`}>
                    <EmailIcon fontSize="small" />
                </Button>
                <Button
                    sx={{ color: "black" }}
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/eddie-kim-0388231b5/"
                    target="_blank">
                    <LinkedInIcon fontSize="small" />
                </Button>
                <Button
                    rel="noreferrer"
                    sx={{ color: "black", marginBottom: "4px" }}
                    href="https://github.com/EddieSKim"
                    target="_blank">
                    <GitHubIcon fontSize="small" />
                </Button>
            </Drawer>
        </>
    );

}

export default NavBar;
