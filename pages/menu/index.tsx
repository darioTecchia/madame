import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

export default function EventsIndex() {
  return (
    <div className='container'>
      <h1>Menu</h1>
    </div>
  )
}

EventsIndex.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madame Lounge Bar | Menu'>
      {page}
    </DefaultLayout>
  )
}