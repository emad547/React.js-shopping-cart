import { categories } from "../constants/categoryList";

import styles from "./Categories.module.css"

import { FaListUl } from "react-icons/fa";

function Categories({ query, categoryHandler }) {
  return (
    <div className={styles.sidebarContainer}>
      <h4 className={styles.sidebarTitle}><FaListUl /> Categories</h4>
      <ul className={styles.categoryList}>
        {categories.map(item => <li key={item.id} onClick={categoryHandler} className={item.type.toLowerCase() === query.category ? styles.selected : null}>{item.type}</li>)}
      </ul>
    </div>
  )
}

export default Categories