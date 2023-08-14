import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './User.module.scss';

interface UserProps {
    classname?: string
}

export const User = ({ classname }: UserProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.User, {}, [classname])} />
    );
};
