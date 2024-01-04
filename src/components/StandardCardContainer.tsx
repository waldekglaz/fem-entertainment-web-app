import { ReactNode } from 'react'
import styles from './StandardCardContainer.module.css'

type StandardCardContainerProps = {
  children: ReactNode
}

function StandardCardContainer({ children }: StandardCardContainerProps) {
  return <div className={styles.container}>{children}</div>
}

export default StandardCardContainer
