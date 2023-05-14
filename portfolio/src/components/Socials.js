import React from "react";
import "./SocialsStyle.css";
import { IconButton, Tooltip } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Socials() {

    return (
        <div className="socials-bar">
            <div className="icon-wrapper">
                <Tooltip title="Send me a mail" placement="right">
                    <IconButton
                        href={`mailto:edkm1212@gmail.com`}
                        className="socials-btn"
                        children={
                            <EmailIcon fontSize="large" />
                        } />
                </Tooltip>
            </div>
            <div className="icon-wrapper">
                <Tooltip title="To LinkedIn" placement="right">
                    <IconButton
                        href="https://www.linkedin.com/in/eddie-kim-0388231b5/"
                        target="_blank"
                        className="socials-btn"
                        children={
                            <LinkedInIcon fontSize="large" />
                        } />
                </Tooltip>
            </div>
            <div className="icon-wrapper">
                <Tooltip title="To GitHub" placement="right">
                    <IconButton
                        href="https://github.com/EddieSKim"
                        target="_blank"
                        className="socials-btn"
                        children={
                            <GitHubIcon fontSize="large" />
                        } />
                </Tooltip>
            </div>
        </div>
    );
}

export default Socials;