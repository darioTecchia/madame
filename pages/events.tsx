import type { ReactElement } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

export default function Index() {
  return (
    <div className='container'>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
      <h1>events</h1>
    </div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madame Lounge Bar | Blog'>
      {page}
    </DefaultLayout>
  )
}