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
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...other
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, { [styles[theme]]: true }, [className])}
            {...other}
        >
            {children}
        </Link>
    );
};
