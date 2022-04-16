import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LogoMadame from '../logo/LogoMadame'

import styles from './Header.module.css'

const Header: NextPage = () => {

  const [showMenu, setshowMenu] = useState(false)

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  }

  return (
    <header className={styles.header}>
      <div className={styles.menu + ''}>
        <div onClick={toggleMenu} className={styles.menuButton}>menú</div>
        {
          showMenu ? (<div onClick={toggleMenu} className={styles.menuOptions}>
            <Link href="/blog">
              <a>caffetteria</a>
            </Link>
            <Link href="/info">
              <a>info</a>
            </Link>
            <div onClick={toggleMenu}>
              close
            </div>
          </div>) : null
        }
      </div >

      <div>
        <Link href="/">
          <a className={styles.logo}>
            <LogoMadame />
          </a>
        </Link>
      </div>

      <div className='txt-right'>
        <Link href='/info'>
          <a>
            info
          </a>
        </Link>
      </div>
    </header >
  )
}

export default Header
