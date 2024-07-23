import styles from "./BasketSidebar.module.css"

import { TbChecklist } from "react-icons/tb"
import { FaHashtag } from "react-icons/fa6"
import { BsPatchCheck } from "react-icons/bs"

function BasketSidebar({ data, checkoutHandler }) {
  return (
    <div className={styles.sidebar}>
      <p><TbChecklist /> Total: <span>{data.total} $</span></p>
      <p><FaHashtag /> Quantity: <span>{data.itemsCounter}</span></p>
      <p><BsPatchCheck /> Status: <span>{!data.checkout && "pending..."}</span></p>
      <button onClick={checkoutHandler}>Checkout</button>
    </div>
  )
}

export default BasketSidebar