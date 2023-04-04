import React, {Suspense} from 'react';
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {moon} from "../assets";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Atom from "./canvas/Atom.jsx";

const Hero2 = () => {
    return (
        <section className="container relative w-full h-screen mx-auto flex justify-between max-w-7xl">
            <div className="left flex-[2] flex flex-col justify-center gap-[20px]">
                {/*<div className="flex flex-col justify-center items-center mt-5">*/}
                {/*    <div className="w-5 h-5 rounded-full bg-[#915eff]"/>*/}
                {/*    <div className="w-1 sm:h-80 h-40 violet-gradient"/>*/}
                {/*</div>*/}
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
                                type: "spring",
                            }
                        }}
                        className={`${styles.heroHeadText} text-white`}

                    >Hi, I'm <span className="text-[#915eff]">Magalmund</span>
                    </motion.h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                            x: -400
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 2,
                                delay: 7,
                                type: "spring"
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
                    x: 400,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: "tween",
                        delay: 6.75,
                        duration: 2,
                        ease: "easeOut"
                    }
                }}
                className="right flex-[3] relative"
            >
                {/*3D model*/}
                {/*<Canvas>*/}
                {/*    <Suspense fallback={null}>*/}
                {/*        <OrbitControls enableZoom={false} autoRotate/>*/}
                {/*        <ambientLight intensity={1}/>*/}
                {/*        <directionalLight position={[3, 2, 1]}/>*/}
                {/*        <Sphere args={[1, 100, 200]} scale={1.5}>*/}
                {/*            <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2}/>*/}
                {/*        </Sphere>*/}
                {/*    </Suspense>*/}
                {/*</Canvas>*/}
                {/*<img*/}
                {/*    className="hero-img w-[800px] h-[600px] object-contain absolute top-0 bottom-0 left-0 right-0 m-auto"*/}
                {/*    src={moon} alt="Moon"/>*/}
                    <Atom/>
            </motion.div>
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div
                        className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"

                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero2;
