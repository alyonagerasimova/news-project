import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
    classname?: string
}

export const Navbar = ({ classname }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev: boolean) => !prev);
    }, []);

    return (
        <div className={classNames(styles.Navbar, {}, [classname])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                className={styles.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam')}
            </Modal>
        </div>
    );
};
