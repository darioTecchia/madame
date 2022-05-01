import type { NextPage } from 'next'
import Link from 'next/link'
import { Event } from '../../models/Event';

import styles from './Events.List.module.scss'

interface EventsListProps {
  events: Event[];
}

const EventsList: NextPage<any, any> = ({ events }: EventsListProps) => {

  return (
    events?.length > 0 ?
      <div className={styles.eventsList}>
        {events?.map((event: Event, i: number) => (
          <Link key={i} href={'/events/' + event.id}>
            <a className={styles.event}>
              <h2>{event.fields.name}</h2>
              <sub>{event.fields.date.toString()} - {event.fields.place}</sub>
              <p>{event.fields.body}</p>
            </a>
          </Link>
        ))}
      </div>
      : <h2>Non ci sono eventi</h2>
  )
}

export default EventsList
