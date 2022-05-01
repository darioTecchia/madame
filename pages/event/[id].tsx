import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next'

import styles from '../../styles/events.module.scss'
import { Event } from '../../models/Event';

export default function EventSingle({ event }: any) {

  return (
    <div className={styles.event + ' container'}>
      <h1>{event.fields.name}</h1>
      <sub>{event.fields.date} - {event.fields.place}</sub>
      <p>
        {event.fields.body}
      </p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await axios.get('/event');
    const events = res.data;
    const paths = events.records.map((post: Event) => ({
      params: { id: post.id },
    }))
    return {
      'paths': paths,
      'fallback': false
    }
  } catch (error: any) {
    return { paths: [], fallback: false }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await axios.get(`/event/${params?.id}`);
    const event = res.data;
    return { props: { 'event': event } }
  } catch (error: any) {
    return { props: { 'error': error.code } }
  }
}

EventSingle.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title={'Madamé - ' + page.props.event.fields.name}>
      {page}
    </DefaultLayout>
  )
}