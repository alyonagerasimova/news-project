import { classNames } from 'shared/lib/classnames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    classname?: string
}

export const LoginForm = ({ classname }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.LoginForm, {}, [classname])}>
            <Input autoFocus type="text" className={styles.input} placeholder={t('Введите имя')} />
            <Input type="text" className={styles.input} placeholder={t('Введите пароль')} />
            <Button className={styles.login_btn}>{t('Войти')}</Button>
        </div>
    );
};
