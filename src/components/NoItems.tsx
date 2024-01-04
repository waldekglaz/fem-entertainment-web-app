import styles from './NoItems.module.css'
type NoItemsProps = {
  message: string
}
function NoItems({ message }: NoItemsProps) {
  return <div className={styles.noItems}>{message}</div>
}

export default NoItems
