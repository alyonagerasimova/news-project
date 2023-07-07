import { classNames } from 'shared/lib/classnames/classNames';
import { Link, type LinkProps } from 'react-router-dom';
import { type FC } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    classname?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        classname,
        ...other
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [classname, styles[theme]])}
            {...other}
        >
            {children}
        </Link>
    );
};
