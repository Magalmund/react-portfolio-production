import React, {useEffect} from 'react';
import {logo} from '../../assets';
import './Preloader.css'
import {preloaderAnimation} from "./index.js";


const Preloader = () => {
    useEffect(() => {
        preloaderAnimation()
    }, [])
    return (
        // <div
        //     className="preloader h-screen w-full bg-primary text-white fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center overflow-hidden">
        //     <div
        //         className="texts-container flex items-center justify-between h-[60px] w-[280px] text-xl font-extrabold overflow-hidden text-white">
        //         <span>Developer |</span>
        //         <span>Curator |</span>
        //         <span>Vibe</span>
        //     </div>
        // </div>
        <div>
            <div className="preloader">
                <div className="preloader-logo"></div>
                <div className="preloader-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="slider"></div>
        </div>
    );
};

export default Preloader;
