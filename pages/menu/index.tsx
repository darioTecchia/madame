import Link from 'next/link';
import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

import styles from './Menu.List.module.scss'
export default function MenusIndex() {
  const menus: any = [1, 2, 3];
  return (
    <div className='container'>
      {menus.length > 0 ?
        <div className={styles.menuList}>
          {menus?.map((e, i) => (
            <Link key={i} href={'/menu/' + i}>
              <a className={styles.menu}>
                <h1>Menu {i + 1}</h1>
                <sub>Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi totam iusto aperiam excepturi! Natus, dicta! Suscipit consectetur repellat impedit eligendi, fugit corporis distinctio aut saepe alias vel est odit?</sub>
              </a>
            </Link>
          ))}
        </div>
        : <h2>Nessuna pagina del menu presente</h2>}
    </div>
  )
}

MenusIndex.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madamé - Menú'>
      {page}
    </DefaultLayout>
  )
}