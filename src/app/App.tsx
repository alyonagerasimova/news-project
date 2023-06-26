import React from 'react';
import {useTheme} from "./providers/ThemeProvider";
import "./styles/index.scss";
import {classNames} from "shared/lib/classnames/classNames";
import {AppRouter} from "./providers/router";
import {Navbar} from "widgets/navbar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;