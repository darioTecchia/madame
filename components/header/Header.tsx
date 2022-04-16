import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <div className="menu">
        <span className="menu-button upper-case">menú</span>
        <div className="menu-options">
          <Link href="/caffetteria">caffetteria</Link>
          <Link href="/pasticceria-e-yogurt">dolci</Link>
          <Link href="/yogurt-e-crema-caffe">yogurt e crema caffè</Link>
          <Link href="/bibite">bibite</Link>
          <Link href="/the">thè</Link>
          <Link href="/panini-e-stuzzicheria">panini e stuzzicheria</Link>
          <Link href="/aperitivi-e-cocktails">aperitivi e cocktails</Link>
          <Link href="/wine-list">wine list</Link>
          <Link href="/info">info</Link>
        </div>
      </div >

      <Link href="/">
        <Image src='/vercel.svg' layout='fill' placeholder="blur" blurDataURL='/favicon.svg' />
      </Link>

      <div className="info-button upper-case">
        <Link href="/info">info</Link>
      </div>
    </header >
  )
}

export default Header
