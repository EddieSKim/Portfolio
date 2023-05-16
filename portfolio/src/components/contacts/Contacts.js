import React from "react";
import "./ContactsStyle.css";
import { Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contacts() {

    return (
        <div className="contact-section" id="contacts">
            <div className="contacts-wrapper">
                <h3 className="contact-h3">Get In Touch</h3>
                <p>I am looking for new opportunities and will be excited to hear back from you. Also, feel free to reach out to say hello! &#128075;</p>
                <div>
                    <Button
                        sx={{ color: "black"}}
                        className="socials-btn"
                        href={`mailto:edkm1212@gmail.com`}>
                        <EmailIcon fontSize="large" />
                    </Button>
                    <Button
                        sx={{ color: "black"}}
                        href="https://www.linkedin.com/in/eddie-kim-0388231b5/"
                        target="_blank"
                        className="socials-btn">
                        <LinkedInIcon fontSize="large" />
                    </Button>
                    <Button
                        sx={{ color: "black"}}
                        href="https://github.com/EddieSKim"
                        target="_blank"
                        className="socials-btn">
                        <GitHubIcon fontSize="large" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;