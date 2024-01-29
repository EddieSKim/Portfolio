import React from "react";
import { TypeAnimation } from "react-type-animation";
import BannerLogo from "./bannerLogo";
import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className={styles.bannerSection} id="banner">
            <div className={styles.bannerImage}>
                <BannerLogo />
            </div>
            <h3 className={styles.bannerTitle}>
                <span>&lt;</span>
                <TypeAnimation
                    sequence={[
                        "",
                        1000,
                        "Welcome",
                    ]}
                    speed={40}
                    wrapper="span" />
                <span>/&gt;</span>
            </h3>
        </div>
    );
}

export default Banner;