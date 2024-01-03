import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import styles from './Root.module.css'

function Root() {
  return (
    <main className={styles.main}>
      <Header />
      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default Root
