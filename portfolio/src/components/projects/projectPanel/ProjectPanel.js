import React from "react";
import "./ProjectPanelStyle.css"

function ProjectPanel({ title, primaryImg }) {
    return (
        <>
            <div className="projPanel-ctn">
                <div className="title-bar">
                    {title}
                </div>
                <img className="proj-img" src={primaryImg} alt={title} />
            </div>
        </>
    );
}

export default ProjectPanel;