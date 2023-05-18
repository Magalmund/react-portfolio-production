import React from 'react';
import HeadBar from "../components/HeadBar.jsx";
import Intro from "../components/Intro.jsx";
import Preloader from "../components/Preloader/Preloader.jsx";


const IntroPage = () => {
    return (
        <>
            <Preloader color="white"/>
            <HeadBar/>
            <Intro/>
        </>
    );
};

export default IntroPage;
