import React, {useEffect, useState} from 'react';
import {styles} from "../styles.js";
import {Link, useLocation} from "react-router-dom";
import {motion} from "framer-motion";
import {logo, logoBlack} from "../assets/index.js";

const HeadBar = () => {


    return (
        <div
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
        >
            <div className="w-full flex justify-between items-center max-w-[1920px]">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }
                    }
                >
                    <motion.img
                        initial={{
                            y: -50,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: 7.25,
                                duration: 2,
                                type: "spring",
                            }
                        }}
                        src={logo}
                        alt="logo"
                        className="w-14 h-14 object-contain"
                    />
                    <motion.p
                        initial={{
                            y: -50,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: 7.5,
                                duration: 2,
                                type: "spring",
                            }
                        }}
                        className="text-white text-[18px] font-bold cursor-pointer flex"
                    >
                    </motion.p>
                </Link>
            </div>
        </div>
    );
};

export default HeadBar;
