import type { NextPage } from 'next'
import Link from 'next/link'

import styles from './Events.List.module.scss'

interface EventsListProps {
  events: [any];
}

const EventsList: NextPage = ({ events = [] }: EventsListProps) => {

  return (
    events.length > 0 ?
      <div className={styles.eventsList}>
        {events?.map((e, i) => (
          <Link key={i} href={'/events/' + i}>
            <a className={styles.event}>
              <h2>Evento {i + 1}</h2>
              <sub>Lunedì 01/01/1970 - Madamé</sub>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat perspiciatis, itaque incidunt odio minus nihil architecto accusantium autem cupiditate maiores molestiae atque sapiente ducimus? Reiciendis eos modi cupiditate! Fuga, numquam.</p>
            </a>
          </Link>
        ))}
      </div>
      : <h2>Non ci sono eventi</h2>
  )
}

export default EventsList
