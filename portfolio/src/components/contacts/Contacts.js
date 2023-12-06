import React from "react";
import { Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./Contacts.module.css";

function Contacts() {

    return (
        <div className={styles.contactSection} id="contacts">
            <div className={styles.contactsWrapper}>
                <h3 className={styles.contactHeader}>Get In Touch</h3>
                <p className={styles.contactsContent}>I am looking for new opportunities and will be excited to hear back from you. Also, feel free to reach out to say hello! &#128075;</p>
                <div>
                    <Button
                        sx={{ color: "black"}}
                        className={styles.socialsBtn}
                        href={`mailto:edkm1212@gmail.com`}>
                        <EmailIcon fontSize="large" />
                    </Button>
                    <Button
                        sx={{ color: "black"}}
                        href="https://www.linkedin.com/in/eddie-kim-0388231b5/"
                        target="_blank"
                        className={styles.socialsBtn}>
                        <LinkedInIcon fontSize="large" />
                    </Button>
                    <Button
                        sx={{ color: "black"}}
                        href="https://github.com/EddieSKim"
                        target="_blank"
                        className={styles.socialsBtn}>
                        <GitHubIcon fontSize="large" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;