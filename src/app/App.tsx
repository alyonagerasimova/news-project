import React, { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar/ui/Sidebar/Sidebar';
import { PageLoader } from 'widgets/pageLoader/ui/PageLoader';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <button type="button" onClick={() => setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, alias aliquam
                    architecto autem eaque,
                    error in modi molestiae nam nisi nostrum officia quos,
                    repudiandae sequi soluta veniam vitae
                    voluptas voluptates!
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
