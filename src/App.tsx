import React, {Suspense} from 'react';
import "./index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/main/MainPage.async";
import {AboutPageAsync} from "./pages/about/AboutPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;