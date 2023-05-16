import React from "react";
import "./SocialsStyle.css";
import { Tooltip, Button, useMediaQuery } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Socials() {
    const smallMediaScreen = useMediaQuery("(max-width: 768px)");

    return (
        <div className="socials-bar">
            <div className="icon-wrapper">
                <Tooltip title="Send me an email" placement="right">
                    <Button
                        sx={{ color: smallMediaScreen ? "white" : "black" }}
                        className="socials-btn"
                        href={`mailto:edkm1212@gmail.com`}>
                        <EmailIcon fontSize="large" />
                    </Button>
                </Tooltip>
            </div>
            <div className="icon-wrapper">
                <Tooltip title="To LinkedIn" placement="right">
                    <Button
                        sx={{ color: smallMediaScreen ? "white" : "black" }}
                        href="https://www.linkedin.com/in/eddie-kim-0388231b5/"
                        target="_blank"
                        className="socials-btn">
                        <LinkedInIcon fontSize="large" />
                    </Button>
                </Tooltip>
            </div>
            <div className="icon-wrapper">
                <Tooltip title="To GitHub" placement="right">
                    <Button
                        sx={{ color: smallMediaScreen ? "white" : "black" }}
                        href="https://github.com/EddieSKim"
                        target="_blank"
                        className="socials-btn">
                        <GitHubIcon fontSize="large" />
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
}

export default Socials;