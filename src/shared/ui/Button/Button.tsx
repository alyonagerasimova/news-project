import { classNames } from 'shared/lib/classnames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props
  return (
    <button
      type="button"
      className={classNames(styles.Button, { [styles[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
