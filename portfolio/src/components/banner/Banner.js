import React from "react";
import "./BannerStyle.css";
import picture from "../../images/ProfileCharacter.png"
import { TypeAnimation } from "react-type-animation";

function Banner() {
    return (
        <>
            <div className="banner-ctn" id="banner">
                <div className="speech-bubble">
                    <div className="title">
                        <TypeAnimation
                            sequence={[
                                "Hello there",
                                4000,
                                "I'm Eddie",
                                4000
                            ]}
                            speed={80}
                            wrapper="span" />
                    </div>
                </div>
                <img className="profile-img" src={picture} alt="profile" />
            </div>
        </>
    );
}

export default Banner;