import type { ReactElement } from 'react'
import EventsList from '../../components/events/Events.List'
import DefaultLayout from '../../layouts/DefaultLayout'

export default function EventsIndex() {
  return (
    <div className='container'>
      <h1>Eventi</h1>
      <EventsList />
    </div>
  )
}

EventsIndex.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madamé - Blog'>
      {page}
    </DefaultLayout>
  )
}