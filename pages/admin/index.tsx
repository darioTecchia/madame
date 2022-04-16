import type { ReactElement } from 'react'
import AdminLayout from '../../layouts/AdminLayout'

export default function Index() {
  return (
    <div>ADMIN</div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}