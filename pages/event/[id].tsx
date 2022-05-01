import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

import styles from '../../styles/events.module.scss'

export default function EventSingle() {

  const router = useRouter()
  const { id } = router.query

  return (
    <div className={styles.event + ' container'}>
      <h1>Evento {id}</h1>
      <sub>Lunedì 01/01/1970 - Madamé</sub>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nihil reiciendis ab praesentium, eius laboriosam adipisci unde, dolorem repudiandae pariatur iste magni dolorum voluptas corrupti autem quisquam voluptatum eaque aliquid!
        Consequuntur illum ipsa nam ratione obcaecati necessitatibus, natus rerum commodi omnis, libero maxime eius. Possimus dolor autem blanditiis explicabo quo! Earum amet esse rem aliquid hic quas quidem maxime dolore.
        Quisquam adipisci, voluptatum, tenetur quis eveniet labore officiis vero deleniti in placeat aliquam? Error debitis esse molestiae tempora! Mollitia impedit enim doloribus, amet nemo debitis saepe? Necessitatibus laboriosam deserunt corporis?
        Esse, nesciunt. Voluptas, aliquam dolorem blanditiis id reiciendis, explicabo iste dolor sit esse culpa libero asperiores molestiae laborum alias aut nam necessitatibus quod sed expedita vero fugiat! Veniam, veritatis quos.
        Itaque numquam repudiandae, dolor pariatur assumenda veniam quibusdam laborum sapiente odio provident, alias neque quas nulla repellat eum quos rerum molestiae reprehenderit amet repellendus. Cum quia natus mollitia necessitatibus dolores.
        Reprehenderit est dignissimos, maxime enim facilis dicta repellendus commodi veniam consequuntur accusantium sed voluptas reiciendis quaerat assumenda amet natus aliquam vero nesciunt in tenetur voluptatem error cum deleniti officiis. Quam.
        Fugit maxime dolorum quis velit quod delectus, odio possimus hic dicta voluptate rerum. Odio rerum reprehenderit, mollitia earum doloribus obcaecati animi delectus possimus unde quos corrupti perspiciatis recusandae, vero at!
        Laboriosam hic vero eveniet accusantium pariatur. Reiciendis hic perspiciatis cum nostrum alias sed eveniet aliquam, minus cupiditate quaerat provident sapiente labore quam amet placeat et eum fuga. Voluptas, quam in!
        Modi cupiditate tempore ut dolorem architecto adipisci. Iusto deleniti quisquam molestiae reprehenderit sit pariatur aperiam beatae dolorem adipisci numquam cum possimus quod blanditiis earum modi corrupti quibusdam, eum voluptatibus autem?
        Modi ex ratione, explicabo laborum enim exercitationem ducimus aut consequatur alias numquam doloribus eos architecto quia unde maxime aspernatur recusandae commodi, magni excepturi atque rerum vero laudantium rem quisquam. Ea!
        Dolores quibusdam eveniet doloremque repellat enim. Facere animi mollitia tenetur earum cum, quidem cupiditate enim suscipit similique officia nostrum eum eius, numquam, assumenda necessitatibus eos laborum sed odio non laboriosam?
        Fuga ullam odio assumenda sit laboriosam, repellendus illum reiciendis dolore blanditiis tempora deserunt dolorem voluptatibus tempore asperiores alias recusandae iusto earum ipsa odit? Obcaecati, ea? Nobis rem cumque aliquam non!
        Expedita enim nisi et inventore nihil eos sed minus, obcaecati ratione itaque tenetur a consequatur illo ipsum aliquam adipisci, quos perferendis ipsam facere atque corporis ab! Delectus eveniet nobis placeat?
        Odit corrupti, et laboriosam aut, aperiam ad libero a sint non ratione porro tenetur iste tempore ipsam dolor! Maxime, velit! Amet eveniet culpa excepturi repellat rerum in adipisci sapiente facere?
        Nesciunt, velit iure obcaecati provident ab esse repellendus voluptatem dicta impedit hic vitae, inventore molestiae modi maiores deserunt repudiandae blanditiis neque suscipit culpa sit? Corrupti voluptatibus fuga voluptas ut voluptatum.
        Itaque at ratione asperiores, ab aliquid aspernatur, a minima ullam earum debitis nostrum vel ipsum atque eveniet! Assumenda, obcaecati! Incidunt eveniet sequi perspiciatis. Totam ullam cum, corporis unde ea harum!
        Nisi architecto aspernatur, nihil aut nulla tempore doloribus laudantium in nostrum rem quo? Nisi natus praesentium porro placeat, laboriosam voluptate quasi deleniti doloribus, pariatur iste neque quisquam accusamus, numquam quae!
        Saepe, maiores placeat? Provident quo ipsa vel pariatur eius voluptatibus veritatis maiores. Deserunt delectus accusantium vel libero praesentium, a est. Eligendi reprehenderit id consequuntur minima, autem accusantium debitis beatae reiciendis.
        Laudantium molestias, mollitia assumenda aliquid et, natus pariatur voluptatem totam aut aliquam aperiam, alias voluptas adipisci at aspernatur maxime eius blanditiis explicabo! Animi illo commodi recusandae aliquid. Incidunt, quaerat ipsum.
        Accusamus deleniti reprehenderit autem est doloremque illum id dolore provident neque eius, vero eum nesciunt suscipit, quidem adipisci nisi. Provident ipsum amet cum explicabo nesciunt. Ducimus sunt voluptate earum nisi.
      </p>
    </div>
  )
}

EventSingle.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madamé - Blog'>
      {page}
    </DefaultLayout>
  )
}