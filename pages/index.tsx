import type { ReactElement } from 'react'
import LogoFace from '../components/logo/LogoFace'
import DefaultLayout from '../layouts/DefaultLayout'

import styles from  '../styles/index.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.faceLogo}>
        <LogoFace />
      </div>
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