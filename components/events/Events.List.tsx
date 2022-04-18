import type { NextPage } from 'next'
import Link from 'next/link'

import styles from './Events.List.module.scss'

const EventsList: NextPage = () => {

  return (
    <div className={styles.eventsList}>
      <h1>Eventi</h1>
      <Link href={'/events/' + '1'}>
        <a className={styles.event}>
          <h2>Nome evento</h2>
          <sub>asd</sub>
          <p>desc</p>
        </a>
      </Link >
    </div>
  )
}

export default EventsList
