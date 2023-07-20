import React from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string
}

export const Navbar = ({ classname }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.Navbar, {}, [classname])}>
            <div className={styles.links} />
        </div>
    );
};
