import SearchIcon from "../assets/icon-search.svg";
import styles from "./Search.module.css";
import { ChangeEvent } from "react";

interface SearchProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ value, onChange, placeholder }: SearchProps) {
  return (
    <div className={styles.search}>
      <img src={SearchIcon} alt="search" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
