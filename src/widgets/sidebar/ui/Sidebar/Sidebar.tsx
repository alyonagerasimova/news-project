import { classNames } from 'shared/lib/classnames/classNames'
import styles from './Sidebar.module.scss'
import React, { useState } from 'react'
import { LangSwitcher, ThemeSwitcher } from 'widgets/switchers'

interface SidebarProps {
  classname?: string
}

export const Sidebar = ({ classname }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  function clickCollapse () {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [classname])}>
      <button onClick={clickCollapse}>
        toggle
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher classname={styles.lang}/>
      </div>
    </div>
  )
}
