import React from "react";
import { Chip } from "@mui/material";
//"#f5f5dc"
function TechChip({ props }) {
    return (
        <Chip
            label={props.tech}
            sx={{
                backgroundColor: `${props.backColor}`,
                fontSize: "1rem",
                border: "1px solid rgb(185, 185, 185)",
                minWidth: "100px",
                margin: "0.5vw",
            }} >
        </Chip>
    );
}

export default TechChip;