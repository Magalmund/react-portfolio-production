import React from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {fadeIn} from "../utils/motion";

const About = ({id}) => {
    return (
        <div id={id}>
            <div>
                <motion.h2 variants={fadeIn("right", "Spring", 6.75, 2)} className={styles.sectionHeadText}>Overview</motion.h2>
                <motion.p variants={fadeIn("right", "Spring", 7, 2)} className={styles.sectionSubText}>"...but with a lot of skills"</motion.p>
            </div>

            <motion.p
                variants={fadeIn("right", "Spring", 7.25, 2)}
                className='mt-4 text-black text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
            </motion.p>
        </div>
    );
};

export default SectionWrapper(About, "about");
