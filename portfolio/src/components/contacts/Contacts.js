import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./Contacts.module.css";
import { motion, useAnimation, useInView } from 'framer-motion';

function Contacts() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <div className={styles.contactSection} id="contacts">
            <div className={styles.contactsWrapper}>
                <motion.h3
                    className={styles.contactHeader}
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5 }}>Get In Touch</motion.h3>
                <motion.p
                    className={styles.contactsContent}
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}>
                    I am looking for new opportunities and will be excited to hear back from you.
                    Also, feel free to reach out to say hello! &#128075;</motion.p>
                <motion.div
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <Button
                        sx={{ color: "black" }}
                        className={styles.socialsBtn}
                        href={`mailto:eddie.s.kim11@gmail.com`}>
                        <EmailIcon fontSize="large" />
                    </Button>
                    <Button
                        sx={{ color: "black" }}
                        href="https://www.linkedin.com/in/eddie-kim-0388231b5/"
                        target="_blank"
                        className={styles.socialsBtn}>
                        <LinkedInIcon fontSize="large" />
                    </Button>
                    <Button
                        sx={{ color: "black" }}
                        href="https://github.com/EddieSKim"
                        target="_blank"
                        className={styles.socialsBtn}>
                        <GitHubIcon fontSize="large" />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

export default Contacts;