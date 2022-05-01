import Link from 'next/link'
import type { ReactElement } from 'react'
import EventsList from '../components/events/Events.List'
import DefaultLayout from '../layouts/DefaultLayout'
import { Event } from '../models/Event'

import styles from '../styles/index.module.scss'

export default function Index() {
  const events: [Event] = [
    {
      "id": "rec01IsZuDijQJn4k",
      "createdTime": new Date("2022-05-01T11:39:33.000Z"),
      "fields": {
        "name": "Evento",
        "body": "Venite numerosi\n",
        "date": new Date("2022-05-02T13:40:00.000Z"),
        "place": "Madamé"
      }
    }
  ];

  return (
    <div className='container'>
      <Link href='/menu'>
        <a>
          <u><h1 className=''>Esplora il nostro menú</h1></u>
        </a>
      </Link>
      <h1>Ultimi eventi</h1>
      <EventsList events={events} />
      <Link href='/events'>
        <a>
          <u><h2 className=''>Vedi tutti gli eventi</h2></u>
        </a>
      </Link>
    </div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madamé'>
      {page}
    </DefaultLayout>
  )
}