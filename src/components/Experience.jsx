import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../styles';
import {experiences} from '../constants';
import {SectionWrapper} from '../hoc';
import {fadeIn} from '../utils/motion';
import React from "react";

const ExperienceCard = ({experience}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{background: '#d9d9d9', color: '#000'}}
            contentArrowStyle={{borderRight: '7px solid #000'}}
            date={experience.date}
            iconStyle={{background: experience.iconBg, border: '4px solid #000', boxShadow: 'none'}}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-[24px] font-bold">{experience.title}</h3>
                <p className="text-[16px]"
                   style={{margin: 0}}>{experience.company_name}</p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </ VerticalTimelineElement>
    )
}
const Experience = ({id}) => {
    return (
        <div id={id}>
            <div>
                <motion.h2 variants={fadeIn("right", "Spring", 0.3, 1)} className={styles.sectionHeadText}>Work experience</motion.h2>
                <motion.p variants={fadeIn("right", "Spring", 0.6, 1)} className={styles.sectionSubText}>"What have done so far"</motion.p>
            </div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline lineColor={"#000"}>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience}/>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default SectionWrapper(Experience, "experience")
