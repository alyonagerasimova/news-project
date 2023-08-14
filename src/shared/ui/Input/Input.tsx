import { classNames } from 'shared/lib/classnames/classNames';
import React, {
    InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    classname?: string,
    value?: string,
    onChange?: (value: string) => void,
    autoFocus?: boolean
}

export const Input = (props: InputProps) => {
    const {
        classname,
        value,
        onChange,
        type = 'text',
        autoFocus = false,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [focus, setFocus] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    useEffect(() => {
        if (autoFocus) {
            setFocus(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(styles.InputWrapper, {}, [classname])}>
            <input
                ref={ref}
                className={styles.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                onBlur={onBlur}
                {...otherProps}
            />
        </div>
    );
};
