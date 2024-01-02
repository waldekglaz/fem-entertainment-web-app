import React from 'react'
import SearchIcon from '../assets/icon-search.svg'
import styles from './Search.module.css'

interface SearchProps {
  value: string
  onChange: any
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
