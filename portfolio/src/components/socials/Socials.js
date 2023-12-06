import React from "react";
import { Tooltip, Button, useMediaQuery } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./Socials.module.css";

function Socials() {
    const smallMediaScreen = useMediaQuery("(max-width: 768px)");

    return (
        <div className={styles.socialsBar}>
            <div className={styles.iconWrapper}>
                <Tooltip title="Send me an email" placement="right">
                    <Button
                        sx={{ color: smallMediaScreen ? "white" : "black" }}
                        className={styles.socialsBtn}
                        href={`mailto:edkm1212@gmail.com`}>
                        <EmailIcon fontSize="large" />
                    </Button>
                </Tooltip>
            </div>
            <div className={styles.iconWrapper}>
                <Tooltip title="To LinkedIn" placement="right">
                    <Button
                        sx={{ color: smallMediaScreen ? "white" : "black" }}
                        href="https://www.linkedin.com/in/eddie-kim-0388231b5/"
                        rel="noreferrer"
                        target="_blank"
                        className={styles.socialsBtn}>
                        <LinkedInIcon fontSize="large" />
                    </Button>
                </Tooltip>
            </div>
            <div className={styles.iconWrapper}>
                <Tooltip title="To GitHub" placement="right">
                    <Button
                        sx={{ color: smallMediaScreen ? "white" : "black" }}
                        href="https://github.com/EddieSKim"
                        rel="noreferrer"
                        target="_blank"
                        className={styles.socialsBtn}>
                        <GitHubIcon fontSize="large" />
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
}

export default Socials;