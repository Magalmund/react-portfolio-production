import React from "react";
import {motion} from "framer-motion";
import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";
import {slideIn, staggerContainer} from "../utils/motion.js";
import {styles} from "../styles.js";

const Tech = () => {

    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.25,
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            y: 50
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                type: "spring"
            }
        }
    }

    return (
        <motion.section
            variants={staggerContainer(0.25, 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount: 0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <div
                className='flex flex-row flex-wrap justify-center gap-10'
            >
                {technologies.map((technology) => (
                    <motion.div
                        variants={item}
                        className='w-28 h-28'
                        key={technology.name}
                    >
                        <BallCanvas icon={technology.icon}/>
                    </motion.div>
                ))}
            </div>
        </motion.section>

    );
};

export default Tech;
