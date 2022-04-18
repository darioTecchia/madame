import type { NextPage } from 'next'
import Link from 'next/link'

import styles from './Events.List.module.scss'

const EventsList: NextPage = () => {

  const list = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.eventsList}>
      {list.map((e, i) => (
        <Link key={i} href={'/events/' + i}>
          <a className={styles.event}>
            <h2>• Evento {i+1}</h2>
            <sub>Lunedì 01/01/1970 - Madame Lounge Bar</sub>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perspiciatis, itaque incidunt odio minus nihil architecto accusantium autem cupiditate maiores molestiae atque sapiente ducimus? Reiciendis eos modi cupiditate! Fuga, numquam.</p>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default EventsList
