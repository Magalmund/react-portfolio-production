import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import IntroPage from "../pages/IntroPage.jsx";
import ContentPage from "../pages/ContentPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<IntroPage />} />
            <Route path='/content' element={<ContentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/*" element={<Navigate to="/error" replace />} />
        </Routes>
    );
};

export default AppRouter;
