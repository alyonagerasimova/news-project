import { classNames } from 'shared/lib/classnames/classNames'
import styles from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
  classname?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    classname,
    ...other
  } = props

  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [classname, styles[theme]])}
      {...other}
    >
      {children}
    </Link>
  )
}
