import React from "react";
import "./LoaderStyle.css";

function Loader() {

    return (
        <div className="loader-container">
            <div className="lds-dual-ring"></div>
        </div>
    );
}

export default Loader;