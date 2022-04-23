import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

import styles from './Menu.single.module.scss'

export default function EventSingle() {

  const router = useRouter()
  const { id } = router.query

  return (
    <div className='container'>
      <h1>Menu {id}</h1>
      <sub>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque architecto labore beatae, perspiciatis quis quae dolor delectus cumque alias saepe libero quisquam earum quas corrupti, animi quidem, dicta nisi quos.</sub>
      <br />
      <br />
      <div className={styles.menuItem}>
        <h2>Gin Tonic</h2>
        <hr />
        <h2>5€</h2>
      </div>
    </div>
  )
}

EventSingle.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madamé - Blog'>
      {page}
    </DefaultLayout>
  )
}