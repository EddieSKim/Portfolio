import React from "react";
import "./BannerStyle.css";
import computer from "../../images/banner/computer.png";
import { TypeAnimation } from "react-type-animation";

function Banner() {
    return (
        <div className="banner-section" id="banner">
            <img className="banner-image" src={computer} alt="computer-img"/>
            <h3 className="banner-title">
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