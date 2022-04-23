import Link from 'next/link'
import type { ReactElement } from 'react'
import EventsList from '../components/events/Events.List'
import DefaultLayout from '../layouts/DefaultLayout'

import styles from '../styles/index.module.scss'

export default function Index() {
  const events = [1, 2];

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