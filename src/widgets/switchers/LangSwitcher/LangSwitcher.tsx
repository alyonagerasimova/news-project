import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';

interface LangSwitcherProps {
    classname?: string,
    short?: boolean
}

export const LangSwitcher = ({ classname, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [classname])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
