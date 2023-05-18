import React from 'react';
import Contact from "../components/Contact.jsx";
import HeadBar from "../components/HeadBar.jsx";
import Preloader from "../components/Preloader/Preloader.jsx";


const ContactPage = () => {

    return (
        <>
            <Preloader color="white"/>
            <HeadBar/>
            <Contact/>
        </>
    )

};

export default ContactPage;
