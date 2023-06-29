import { classNames } from 'shared/lib/classnames/classNames';
import './Loader.scss';

interface LoaderProps {
  classname?: string
}

export const Loader = ({ classname }: LoaderProps) => (
    <div className={classNames('lds-roller', {}, [classname])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
