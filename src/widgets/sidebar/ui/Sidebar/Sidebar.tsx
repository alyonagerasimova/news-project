import { classNames } from 'shared/lib/classnames/classNames';
import React, { useState } from 'react';
import { LangSwitcher, ThemeSwitcher } from 'widgets/switchers';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    classname?: string
}

export const Sidebar = ({ classname }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    function clickCollapse() {
        setCollapsed((prev) => !prev);
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [classname])}
        >
            <Button
                type="button"
                onClick={clickCollapse}
                data-testid="sidebar-toggle"
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.home}
                    className={styles.item}
                >
                    <HomeIcon className={styles.icon} />
                    <span className={styles.link}>{t('Home')}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={styles.item}
                    theme={AppLinkTheme.INVERTED}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('About')}</span>
                </AppLink>
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    classname={styles.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
};
