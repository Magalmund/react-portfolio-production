import React from 'react';
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import Atom from "../components/canvas/Atom.jsx";
import {Link} from "react-router-dom";


const Intro = () => {
    return (
        <div className="bg-[#212121]">
            <section
                className="container relative w-full h-screen mx-auto flex flex-row flex-wrap justify-between max-w-7xl inset-0 gap-5">
                <div
                    className={`2xl:px-0 sm:px-16 px-6 top-[120px] absolute lg:static lg:top-0 left flex-[2] flex flex-col justify-center gap-[20px] z-[1]`}>
                    <motion.div>
                        <motion.h1
                            initial={{
                                opacity: 0,
                                x: -400
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 2,
                                    delay: 6.75,
                                    type: "Spring",
                                }
                            }}
                            className={`${styles.heroHeadText} text-white`}

                        >Hi, I'm Nikita
                        </motion.h1>
                        <motion.p
                            initial={{
                                opacity: 0,
                                x: -200
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 2,
                                    delay: 7,
                                    type: "Spring"
                                }
                            }}
                            className={`${styles.heroSubText} mt-2 text-white-100`}
                        >
                            I develop 3D
                            visuals, user <br
                            className="sm:block hidden"/> interfaces and web applications.
                        </motion.p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 0,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: "Spring",
                            delay: 7,
                            duration: 2,
                            ease: "easeOut"
                        }
                    }}
                    className="right flex-[3] relative z-0"
                >
                    <Atom/>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -100
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 6.75,
                            duration: 2,
                            type: "Spring"
                        }
                    }}
                    className="absolute bottom-32 md:bottom-16 lg:bottom-12 w-full flex justify-center items-center z-[1]"
                >
                    <Link
                        className="
                            text-2xl
                            relative
                            after:content-['']
                            after:block
                            after:w-0
                            after:h-[1px]
                            after:absolute
                            after:bottom-0
                            after:bg-white
                            after:transition-all
                            after:duration-300
                            hover:after:w-full
                        "
                        to="/content"
                    >
                        What I do?
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Intro;
