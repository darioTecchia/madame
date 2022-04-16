import type { ReactElement } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

export default function Index() {
  return (
    <div>HOME</div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madame Lounge Bar'>
      {page}
    </DefaultLayout>
  )
}