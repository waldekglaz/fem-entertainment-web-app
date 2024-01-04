import { Outlet } from 'react-router-dom'
import { Header } from '../components'

import { PageWrapper } from '../components'

function Root() {
  return (
    <PageWrapper>
      <Header />

      <Outlet />
    </PageWrapper>
  )
}

export default Root
