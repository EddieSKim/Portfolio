import React from "react";
import "./LoaderStyle.css";

function Loader() {

    return (
        // <div className="loader-container">
        //     <div className="ball"></div>
        //     <div className="loader-wrapper">
        //         <div className="box"></div>
        //         <div className="box"></div>
        //         <div className="box"></div>
        //     </div>
        // </div>
        <div className="loader-container">
            <div class="lds-dual-ring"></div>
        </div>
    );
}

export default Loader;