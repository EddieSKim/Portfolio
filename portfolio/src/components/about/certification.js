import React from "react";
import styles from "./certification.module.css";

function Certificates({ props }) {
    return (
        <div className={styles.container}>
            <div className={styles.certName}>
                {props.name}
            </div>
            <div className={styles.certProvider}>
                {props.provider}
            </div>
        </div>
    );
}

export default Certificates;