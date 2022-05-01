import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import axios from 'axios';
import { GetStaticPaths, GetServerSideProps } from 'next'

import styles from './Menu.single.module.scss'
import { Menu } from '../../models/Menu';
import { Cocktail } from '../../models/Cocktail';

export default function EventSingle({ menu, cocktails }: any) {

  return (
    <div className='container'>
      <h1>{menu.fields.name}</h1>
      <sub>{menu.fields.description}</sub>
      <br />
      <br />
      {
        cocktails?.length > 0 ?
          cocktails?.map((cocktail: Cocktail) =>
            <div key={cocktail.id} className={styles.menuItemWrapper}>
              <div className={styles.menuItem}>
                <h2>{cocktail.fields.name}</h2>
                <hr />
                <h2>{cocktail.fields.price} €</h2>
              </div>
              {cocktail.fields.description && <sub><b>Descrizione</b>: {cocktail.fields.description}</sub>}
              {cocktail.fields.ingredients && <sub><b>Ingredienti</b>: {cocktail.fields.ingredients}</sub>}
              {cocktail.fields.allergens && <sub><b>Allergeni</b>: {cocktail.fields.allergens}</sub>}
            </div>
          )
          : <span>NO</span>
      }
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    let res = await axios.get(`/menu/${params?.id}`);
    let menu = res.data;

    res = await axios.get(`/cocktail`, {
      params: {
        'filterByFormula': `FIND("${menu.fields.name}", {menu_ids})`
      }
    });
    const cocktails = res.data.records;
    return {
      props: {
        'menu': menu,
        'cocktails': cocktails
      }
    }
  } catch (error: any) {

    return { props: { 'error': error.code } }
  }
}

EventSingle.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title={'Madamé - ' + page.props.menu.fields.name}>
      {page}
    </DefaultLayout>
  )
}