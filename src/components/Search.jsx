import styles from "./Search.module.css"

import { IoSearchSharp } from "react-icons/io5"

function Search({ search, setSearch, searchHandler }) {

  return (
    <div className={styles.searchContainer}>
      <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search..." />
      <button onClick={searchHandler}><IoSearchSharp /></button>
    </div>
  )
}

export default Search