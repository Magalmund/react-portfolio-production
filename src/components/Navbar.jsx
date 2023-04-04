import React from 'react';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';
import {animate, motion, stagger, useAnimate} from 'framer-motion';


const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)


    const container = {
        show: {
            transition: {
                delayChildren: 7.75,
                when: "beforeChildren",
                staggerChildren: 0.25,
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            y: -50
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
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-nav`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
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
                        className="w-9 h-9 object-contain"
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
                        Magalmund &nbsp;
                        <span className="sm:block hidden">| JS Mastery</span>
                    </motion.p>
                </Link>
                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="list-none hidden sm:flex flex-row gap-10"
                >
                    {navLinks.map((link) => (
                        <motion.li
                            variants={item}
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a className="relative after:content-[''] after:block after:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-white hover:after:w-full hover:after:transition-all hover:after:duration-300 " href={`#${link.id}`}>{link.title}</a>
                        </motion.li>
                    ))}
                </motion.ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt=""
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
                        <ul
                            className="list-none flex justify-end items-start flex-col gap-4"
                        >
                            {navLinks.map((link) => (
                                <li

                                    key={link.id}
                                    className={`${
                                        active === link.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
