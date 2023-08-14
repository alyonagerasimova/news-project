import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';

interface UserProps {
    classname?: string
}

export const User = ({ classname }: UserProps) => {
    const { t } = useTranslation();
    return (
        <div />
    );
};
