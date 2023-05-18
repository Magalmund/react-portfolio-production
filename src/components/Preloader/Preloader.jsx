import React, {useEffect} from 'react';
import './preloader.css'
import {preLoaderAnim} from "./index.js";


const Preloader = ({color}) => {
    useEffect(() => {
        preLoaderAnim()
    }, [])
    return (
        <div
            className={`${color === 'grey' ? "bg-primary_bl" : "bg-white"} preloader h-screen w-full bg-black text-white fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center overflow-hidden`}>
            <div
                className={`${color === 'grey' ? "text-white" : "text-black"} texts-container flex items-center justify-between h-[60px] text-sm md:text-lg lg:text-xl font-extrabold overflow-hidden`}>
                <span className="tracking-[2px] md:tracking-[7px] lg:tracking-[10px] uppercase">Developer</span>
                <span className="mx-2 lg:mx-3">|</span>
                <span className="tracking-[2px] md:tracking-[7px] lg:tracking-[10px] uppercase">Creative</span>
                <span className="mx-2 lg:mx-3">|</span>
                <span className="tracking-[2px] md:tracking-[7px] lg:tracking-[10px] uppercase">Technologist</span>
            </div>
        </div>
    );
};

export default Preloader;
