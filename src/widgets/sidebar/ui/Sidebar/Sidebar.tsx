import { classNames } from 'shared/lib/classnames/classNames';
import React, { useState } from 'react';
import { LangSwitcher, ThemeSwitcher } from 'widgets/switchers';
import { useTranslation } from 'react-i18next';
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
            <button
                type="button"
                onClick={clickCollapse}
            >
                {t('toggle')}
            </button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher classname={styles.lang} />
            </div>
        </div>
    );
};
