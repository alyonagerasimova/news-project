import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    classname?: string
}

export const PageError = ({ classname }: PageErrorProps) => {
    const { t } = useTranslation();

    function reloadPage(): void {
        location.reload();
    }

    return (
        <div className={classNames(styles.PageError, {}, [classname])}>
            {t('Произошла непредвиденная ошибка')}
            <Button
                onClick={reloadPage}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
