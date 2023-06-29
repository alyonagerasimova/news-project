import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  classname?: string
}

export const NotFoundPage = ({ classname }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.NotFoundPage, {}, [classname])}>
            {t('Страница не найдена')}
        </div>
    );
};
