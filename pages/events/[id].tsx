import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

export default function EventSingle() {

  const router = useRouter()
  const { id } = router.query

  return (
    <div className='container'>
      <h1>Evento {id}</h1>
    </div>
  )
}

EventSingle.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madame Lounge Bar | Blog'>
      {page}
    </DefaultLayout>
  )
}