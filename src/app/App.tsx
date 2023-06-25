import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./providers/ThemeProvider";
import "./styles/index.scss";
import {classNames} from "shared/lib/classnames/classNames";
import {AboutPage} from "pages/about";
import {MainPage} from "pages/main";
import {AppRouter} from "./providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <AppRouter/>

        </div>
    );
};

export default App;