import React from 'react';
import {classNames} from "shared/lib/classnames/classNames";
import styles from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    classname?: string
}
export const Navbar = ({classname}: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [classname])}>
            <ThemeSwitcher/>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.INVERTED}  to="/" className={styles.mainLink} >Home</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to="/about">About</AppLink>
            </div>
        </div>
    );
};