import SearchIcon from '../assets/icon-search.svg'
import styles from './Search.module.css'
import { ChangeEvent } from 'react'

interface SearchProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Search({ value, onChange }: SearchProps) {
  return (
    <div className={styles.search}>
      <img src={SearchIcon} alt="search" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for movies or TV series"
      />
    </div>
  )
}

export default Search
