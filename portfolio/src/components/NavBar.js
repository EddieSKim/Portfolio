import React from "react";
import { Link } from 'react-scroll'
import HomeIcon from '@mui/icons-material/Home';
import PortraitIcon from '@mui/icons-material/Portrait';
import AssignmentIcon from '@mui/icons-material/Assignment';

function NavBar() {
    return (
        <div className="navBar">
            NAV barrrrr
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
            </div>
        </div>
    );

}

export default NavBar;