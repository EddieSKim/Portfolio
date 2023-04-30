import React from "react";
import "./BannerStyle.css";

function Banner() {
    return (
        <>
            <div className="banner-ctn" id="banner">
                <div className="title">
                    Hello there, I'm
                </div>
                <div>
                    <span>Eddie</span>
                </div>
                <div className="body">
                    I'm a software engineer
                </div>
            </div>
        </>
    );
}

export default Banner;