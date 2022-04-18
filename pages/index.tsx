import type { ReactElement } from 'react'
import EventsList from '../components/events/Events.List'
import LogoFace from '../components/logo/LogoFace'
import DefaultLayout from '../layouts/DefaultLayout'

import styles from  '../styles/index.module.scss'

export default function Index() {
  return (
    <div className='container'>
      <div className={styles.faceLogo}>
        <LogoFace />
      </div>
      <EventsList />
    </div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madame Lounge Bar'>
      {page}
    </DefaultLayout>
  )
}