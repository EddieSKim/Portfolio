import React from "react";
import { Link } from 'react-scroll'
import HomeIcon from '@mui/icons-material/Home';
import PortraitIcon from '@mui/icons-material/Portrait';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LaptopIcon from '@mui/icons-material/Laptop';
import './NavBarStyle.css';

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
                    <Link
                        to="banner"
                        smooth={true}
                        duration={300}
                    >
                        <HomeIcon />
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={300}
                    >
                        <PortraitIcon />
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={300}
                    >
                        <AssignmentIcon />
                    </Link>
                    <Link
                        to="work"
                        smooth={true}
                        duration={300}
                    >
                        <LaptopIcon />
                    </Link>
                    <Link
                        to="contacts"
                        smooth={true}
                        duration={300}
                    >
                        <PermContactCalendarIcon />
                    </Link>
                </div>
            </div>
        </>
    );

}

export default NavBar;