import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import {fadeIn} from '../utils/motion';
import React from "react";
import {FaGithub, FaLink} from "react-icons/fa";


const ProjectCard = ({index, name, description, tags, image, source_code_link, web_link, status}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="flex flex-wrap flex-col justify-between bg-[#212121] p-5 rounded-2xl sm:w-[360px] w-full h-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    {!status &&
                        <h2 className="absolute text-2xl top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-10">Coming Soon</h2>
                    }
                    <div
                        className={status ? "absolute inset-0 flex justify-end m-3 card-img_hover" : "absolute inset-0 flex justify-end card-img_hover m-0 bg-[#000000c2] rounded-2xl"}>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <FaGithub className="w-1/2 h-1/2 object-contain"/>
                        </div>
                        <div
                            onClick={() => window.open(web_link, "_blank")}
                            className="ml-[10px] black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <FaLink className="w-1/2 h-1/2 object-contain"/>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}


const Works = ({id}) => {
    return (
        <div id={id}>
            <div>
                <motion.h2 variants={fadeIn("right", "Spring", 0.3, 1)} className={styles.sectionHeadText}>Projects</motion.h2>
                <motion.p variants={fadeIn("right", "Spring", 0.6, 1)} className={styles.sectionSubText}>"My work"</motion.p>
            </div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("right", "Spring", 0.9, 1)}
                    className="mt-3 text-black text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7 justify-center lg:justify-start">
                {projects.map((projects, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...projects}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Works, "works")
