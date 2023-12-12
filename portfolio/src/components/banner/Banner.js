import React, { useEffect } from "react";
import computer from "../../images/banner/computer.png";
import { TypeAnimation } from "react-type-animation";
import styles from "./Banner.module.css";

import spaceBackground from "../../images/banner/spaceBackground.png";
import stars from "../../images/banner/stars.png";
import planet from "../../images/banner/planet.png";
import mainBackground from "../../images/banner/main.png";
import spaceRock from "../../images/banner/floatingRock.png";
import foreground from "../../images/banner/spaceForeground.png";

function Banner() {

    useEffect(() => {
        let backdrop = document.getElementById("background");
        let starBackground = document.getElementById("stars");
        let planetBackground = document.getElementById("planet");
        let mainBack = document.getElementById("mainBackground");
        let floatRock = document.getElementById("spaceRock");
        let mainFore = document.getElementById("mainForeground");

        window.addEventListener('scroll', () => {
            var value = window.scrollY;

            backdrop.style.top = value * 1 + 'px';
            starBackground.style.top = value * 1.05 + 'px';
            starBackground.style.left = value * 0.05 + 'px';
            planetBackground.style.top = value * 0.9 + 'px';
            planetBackground.style.left = value * 0.05 + 'px';
            mainBack.style.top = value * 0.5 + 'px';
            floatRock.style.top = value * 0.4 + 'px';
            mainFore.style.top = value * -0.0001 + 'px';
        })
    }, [])


    return (
        <div className={styles.bannerContainer} id="banner">
            <div className={styles.parallax}>
                <img src={spaceBackground} id="background" alt="space-background" />
                <h2 className={styles.nameText} id="name">Eddie</h2>
                <img src={stars} id="stars" alt="stars" />
                <img src={planet} id="planet" alt="planet" />
                <img src={mainBackground} id="mainBackground" alt="main-background" />
                <img src={spaceRock} id="spaceRock" alt="spaceRock" />
                <img src={foreground} id="mainForeground" alt="main-foreground" />
            </div>
        </div>
    );
}

export default Banner;