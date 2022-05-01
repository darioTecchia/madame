import type { NextPage } from 'next'
import Link from 'next/link'

import styles from './Events.List.module.scss'

interface EventsListProps {
  events: [any];
}

const EventsList: NextPage<any, any> = (props: EventsListProps) => {

  return (
    props?.events?.length > 0 ?
      <div className={styles.eventsList}>
        {props?.events?.map((e, i) => (
          <Link key={i} href={'/events/' + e.id}>
            <a className={styles.event}>
              <h2>{e.fields.name}</h2>
              <sub>{e.fields.date.toString()} - {e.fields.place}</sub>
              <p>{e.fields.body}</p>
            </a>
          </Link>
        ))}
      </div>
      : <h2>Non ci sono eventi</h2>
  )
}

export default EventsList
