import Link from 'next/link';
import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Menu } from '../../models/Menu';

import styles from './Menu.List.module.scss'
export default function MenusIndex() {
  const menus: Menu[] = [
    {
      "id": "recLONXs7DfSsZXye",
      "createdTime": new Date("2022-04-27T15:07:15.000Z"),
      "fields": {
        "cocktails": [
          "recz1gAjKZZAMqhNT",
          "recR4EnSDaThlGWCl"
        ],
        "description": "desc",
        "name": "Cocktail"
      }
    }
  ];

  return (
    <div className='container'>
      {menus.length > 0 ?
        <div className={styles.menuList}>
          {menus?.map((e: Menu, i) => (
            <Link key={i} href={'/menu/' + i}>
              <a className={styles.menu}>
                <h1>{e.fields.name}</h1>
                <sub>{e.fields.description}</sub>
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