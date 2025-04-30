import React from 'react';
import Tech from "../components/Tech.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Works from "../components/Works.jsx";
import Nav from "../components/Nav.jsx";
import '../morph.css'
import Preloader from "../components/Preloader/Preloader.jsx";

const ContentPage = () => {

    return (
        <div className="pb-24 morph">
            <Preloader color="grey"/>
            <Nav/>
            <div className="w-full min-h-screen flex flex-col items-center justify-center">
                <About id="about"/>
                <Tech/>
            </div>
            <Experience id="experience"/>
            <Works id="works"/>
        </div>
    );
};

export default ContentPage;
