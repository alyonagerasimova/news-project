import { classNames } from 'shared/lib/classnames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  classname?: string
}

export const PageLoader = ({ classname }: PageLoaderProps) => (
    <div className={classNames(styles.PageLoader, {}, [classname])}>
        <Loader />
    </div>
);
