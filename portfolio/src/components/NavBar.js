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
        <div className="navBar">
            <div>
                <Link to="home">
                    <HomeIcon />
                </Link>
                <Link to="about">
                    <PortraitIcon />
                </Link>
                <Link to="projects">
                    <AssignmentIcon />
                </Link>
                <Link to="work">
                    <LaptopIcon />
                </Link>
                <Link to="contacts">
                    <PermContactCalendarIcon />
                </Link>
            </div>
        </div>
    );

}

export default NavBar;