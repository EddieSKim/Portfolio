import React from "react";
import { motion, useAnimation } from 'framer-motion';

function BannerLogo() {
    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },

        visible: {
            opacity: 1,
            pathLength: 1,
        }
    }

    const pathTransition = {
        duration: 2,
        ease: "easeInOut"
    }

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 217.73 245.534"
            >
                <g
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(407.57 56.368)"
                >
                    {/* First Letter D */}
                    <motion.path
                        fill="#fff"
                        d="M-298.779-2.5v50l8.66 5v-5l4.33 2.5v-5l4.33 2.5v-30l-4.33-2.5v-5l-4.33-2.5v-5zm4.33 12.5l4.33 2.5v5l4.33 2.5v20l-4.33-2.5v5l-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut"
                    />
                    <motion.path fill="#fff" d="M-298.779-2.5l4.33-2.5 8.66 5-4.33 2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-285.788 0v5l-4.33 2.5v-5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-285.788 5l4.33 2.5-4.33 2.5-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-281.458 7.5v5l-4.33 2.5v-5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-281.458 12.5l4.33 2.5-4.33 2.5-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-277.128 15v30l-4.33 2.5v-30z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#ccc" d="M-290.119 52.5l4.33-2.5-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#ccc" d="M-285.788 50l4.33-2.5-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path
                        fill="none"
                        d="M-294.449 10v30l4.33 2.5v-5l4.33 2.5V20l-4.33-2.5v-5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut"
                    />
                    <motion.path fill="#b3b3b3" d="M-294.449 40l4.33-2.5v5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#ccc" d="M-290.119 37.5v-25l-4.33-2.5v30z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#ccc" d="M-290.119 37.5l4.33-2.5v5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.25 }}
                        ease="easeInOut" />
                </g>
                <g
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(407.57 56.368)"
                >
                    {/* Second Letter D */}
                    <motion.path
                        fill="#fff"
                        d="M-272.798 12.5v50l8.66 5v-5l4.33 2.5v-5l4.33 2.5v-30l-4.33-2.5v-5l-4.33-2.5v-5zm4.33 12.5l4.33 2.5v5l4.33 2.5v20l-4.33-2.5v5l-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut"
                    />
                    <motion.path fill="#fff" d="M-272.798 12.5l4.33-2.5 8.66 5-4.33 2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-259.808 15v5l-4.33 2.5v-5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-259.808 20l4.33 2.5-4.33 2.5-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-255.477 22.5v5l-4.33 2.5v-5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-255.477 27.5l4.33 2.5-4.33 2.5-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-251.147 30v30l-4.33 2.5v-30z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path fill="#ccc" d="M-264.138 67.5l4.33-2.5-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path fill="#ccc" d="M-259.808 65l4.33-2.5-4.33-2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path
                        fill="none"
                        d="M-268.468 25v30l4.33 2.5v-5l4.33 2.5V35l-4.33-2.5v-5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut"
                    />
                    <motion.path fill="#b3b3b3" d="M-268.468 55l4.33-2.5v5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path fill="#ccc" d="M-264.138 52.5v-25l-4.33-2.5v30z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                    <motion.path fill="#ccc" d="M-264.138 52.5l4.33-2.5v5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.5 }}
                        ease="easeInOut" />
                </g>
                <g
                    fill="#fff"
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(407.57 56.368)"
                >
                    {/* Letter I */}
                    <motion.path d="M-246.817 27.5v50l4.33 2.5V30z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.75 }}
                        ease="easeInOut" />
                    <motion.path d="M-246.817 27.5l4.33-2.5 4.33 2.5-4.33 2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.75 }}
                        ease="easeInOut" />
                    <motion.path d="M-238.157 27.5v50l-4.33 2.5V30z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 0.75 }}
                        ease="easeInOut" />
                </g>
                <g
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(407.57 56.368)"
                >
                    {/* First Letter E */}
                    <motion.path fill="#fff" d="M-324.76-17.5l4.33-2.5 17.321 10-4.33 2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-303.109-10V0l-4.33 2.5v-10z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-307.439 12.5l4.33-2.5v10l-4.33 2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-307.439 42.5l4.33-2.5V30l-4.33 2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25 }}
                        ease="easeInOut" />
                    <motion.path
                        fill="#fff"
                        d="M-324.76-17.5v50l17.321 10v-10l-12.99-7.5V15l12.99 7.5v-10l-12.99-7.5V-5l12.99 7.5v-10z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25 }}
                        ease="easeInOut"
                    />
                    <motion.path
                        fill="#ccc"
                        d="M-303.109 10l-12.99-7.5v-5l-4.33-2.5V5l4.33-2.5-4.33 2.5 12.99 7.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25 }}
                        ease="easeInOut"
                    />
                    <motion.path
                        fill="#ccc"
                        d="M-303.109 30l-12.99-7.5v-5l-4.33-2.5v10l4.33-2.5-4.33 2.5 12.99 7.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25 }}
                        ease="easeInOut"
                    />
                </g>
                <g
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(217.55 -50.587)"
                >
                    {/* Bottom monitor frame */}
                    <g>
                        <path fill="none" d="M-147.308 70.74l8.731-5.027z"/>
                        <path fill="#fff" d="M-155.962 55.882l8.66 15v80l-8.66 5z"/>
                        <path
                            fill="#ccc"
                            fillOpacity="1"
                            d="M-147.308 70.74l-8.654-14.858 8.66-5 8.725 14.831-.064 80.169-8.66 5-.008-80.142 8.732-5.027z"
                        />
                    </g>
                    <g>
                        <path
                            fill="#ccc"
                            fillOpacity="1"
                            d="M-147.302 150.882l8.66-5 121.244 70v10z"
                        />
                        <path
                            fill="#fff"
                            d="M-155.962 155.882l8.66-5 129.904 75 8.66 15z"
                        />
                    </g>
                </g>
                <g
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(407.57 56.368)"
                >
                    {/* Last Letter E */}
                    <motion.path
                        fill="#fff"
                        d="M-233.827 35l4.33-2.5 17.32 10-4.33 2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 1 }}
                        ease="easeInOut"></motion.path>
                    <motion.path
                        fill="#fff"
                        d="M-212.176 42.5v10l-4.33 2.5V45z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 1 }}
                        ease="easeInOut"></motion.path>
                    <motion.path
                        fill="#fff"
                        d="M-216.506 65l4.33-2.5v10l-4.33 2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 1 }}
                        ease="easeInOut" />
                    <motion.path fill="#fff" d="M-216.506 95l4.33-2.5v-10l-4.33 2.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 1 }}
                        ease="easeInOut" />
                    <motion.path
                        fill="#fff"
                        d="M-233.827 35v50l17.32 10V85l-12.99-7.5v-10l12.99 7.5V65l-12.99-7.5v-10l12.99 7.5V45z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 1 }}
                        ease="easeInOut"
                    />
                    <motion.path
                        fill="#ccc"
                        d="M-212.176 62.5l-12.99-7.5v-5l-4.33-2.5v10l4.33-2.5-4.33 2.5 12.99 7.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 1 }}
                        ease="easeInOut"
                    />
                    <motion.path
                        fill="#ccc"
                        d="M-212.176 82.5l-12.99-7.5v-5l-4.33-2.5v10l4.33-2.5-4.33 2.5 12.99 7.5z"
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, delay: 1 }}
                        ease="easeInOut"
                    />
                </g>
                <g
                    fill="#fff"
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(187.02 12.11)"
                >
                    {/* Top monitor frame */}
                    <path d="M-125.44-6.957l8.66 15 129.905 75 8.66-5z"/>
                    <path d="M-125.44-6.957l8.66-5 147.225 85-8.589 4.973z"/>
                </g>
                <g
                    fill="#fff"
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(217.55 -50.587)"
                >
                    <path d="M-8.738 240.882l-8.66-15v-80l8.66-5z"/>
                    <path d="M-8.738 140.882l8.59-4.973v100l-8.66 5z"/>
                    <path d="M-4.525 217.27v5l.866.5v-5z"/>
                    <path d="M-4.525 217.27l.866-.5.866.5v5l-.866.5v-5l.866-.5-.866.5z"/>
                    <path d="M-4.525 210.27v5l.866.5v-5z"/>
                    <path d="M-4.525 210.27l.866-.5.866.5v5l-.866.5v-5l.866-.5-.866.5z"/>
                </g>
                <g
                    fill="#fff"
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(407.297 54.881)"
                >
                    <path d="M-407.032 95l60.622-35 138.564 80-60.622 35z"/>
                    <path d="M-407.032 95v10l138.564 80 60.622-35v-10l-60.622 35v10-10z"/>
                </g>
                <g
                    fill="#fff"
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(407.297 54.881)"
                >
                    <path d="M-294.449 80v10l17.32 10V90z"/>
                    <path d="M-272.798 92.5v10l-4.33-2.5V90z"/>
                </g>
                <g
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(407.297 54.881)"
                >
                    <path fill="#fff" d="M-242.487 125l-8.66 5 8.66 5 8.66-5z"/>
                    <g>
                        <path fill="#fff" d="M-346.41 65l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-355.07 70v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-336.018 71l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-344.678 76v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-325.626 77l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-334.286 82v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-315.233 83l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-323.893 88v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-304.84 89l-8.661 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-313.501 94v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-294.449 95l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-303.109 100v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-284.056 101l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-292.717 106v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-273.664 107l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-282.324 112v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-263.272 113l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-271.932 118v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-252.88 119l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-261.54 124v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path
                            fill="gray"
                            d="M-251.147 130v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-232.095 131l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-240.755 136v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-356.802 71l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-365.463 76v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-346.41 77l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-355.07 82v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-336.018 83l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-344.678 88v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-325.626 89l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-334.286 94v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-315.233 95l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-323.893 100v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-304.84 101l-8.661 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-313.501 106v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-294.449 107l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-303.109 112v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-284.056 113l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-292.717 118v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-273.664 119l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-282.324 124v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-263.272 125l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-271.932 130v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-252.88 131l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-261.54 136v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-242.487 137l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-251.147 142v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-367.195 77l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-375.855 82v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-356.802 83l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-365.463 88v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-346.41 89l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-355.07 94v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-336.018 95l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-344.678 100v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-325.626 101l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-334.286 106v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-315.233 107l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-323.893 112v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-304.84 113l-8.661 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-313.501 118v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-294.449 119l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-303.109 124v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-284.056 125l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-292.717 130v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-273.664 131l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-282.324 136v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-263.272 137l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-271.932 142v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-252.88 143l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-261.54 148v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-377.587 83l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-386.247 88v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-367.195 89l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-375.855 94v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-356.802 95l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-365.463 100v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-346.41 101l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-355.07 106v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-336.018 107l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-344.678 112v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-325.626 113l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-334.286 118v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-315.233 119l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-323.893 124v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-304.84 125l-8.661 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-313.501 130v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-294.449 131l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-303.109 136v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-284.056 137l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-292.717 142v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-273.664 143l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-282.324 148v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-263.272 149l-8.66 5 8.66 5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-271.932 154v1l8.66 5 8.66-5v-1l-8.66 5v1-1z"
                        />
                        <path fill="#fff" d="M-346.41 113l-8.66 5 40.703 23.5 8.66-5z"/>
                        <path
                            fill="gray"
                            d="M-355.07 118v1l40.703 23.5 8.66-5v-1l-8.66 5v1-1z"
                        />
                    </g>
                </g>
                <g
                    fill="#fff"
                    stroke="#000"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeOpacity="1"
                    strokeWidth="0.265"
                    transform="translate(407.297 54.881)"
                >
                    <path d="M-242.487 180l17.32-10 12.99 7.5-17.32 10z"/>
                    <path d="M-242.487 180v3l12.99 7.5 17.32-10v-3l-17.32 10v3-3z"/>
                    <path d="M-230.796 173.25l12.99 7.5 5.63-3.25-12.99-7.5z"/>
                    <path d="M-224.3 177l5.629-3.25z"/>
                    <path d="M-231.056 173.4l12.99 7.5.174-.1-12.99-7.5z"/>
                </g>
            </svg>
        </>
    );
}

export default BannerLogo;