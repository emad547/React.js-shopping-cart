import styles from "./BasketCard.module.css"

import { MdDeleteOutline } from "react-icons/md";

import { shortenText } from "../helpers/shortenText"

function BasketCard({ data, dispatchHandler }) {
  return (
    <div className={styles.basketCardContainer}>
      <img src={data.image} alt={data.title} className={styles.productImage} />
      <span className={styles.title}>{shortenText(data.title)}</span>
      <span className={styles.price}>{data.price} $</span>
      <div className={styles.buttons}>
        {data.quantity === 1 && <button onClick={() => dispatchHandler("REMOVE", data)}><MdDeleteOutline /></button>}

        {data.quantity > 1 && <button onClick={() => dispatchHandler("DECREASE", data)}>-</button>}

        <span>{!!data.quantity && data.quantity}</span>

        {data.quantity === 0 ? (
          <button onClick={() => dispatchHandler("ADD", data)}><TbShoppingBagCheck /></button>
        ) : (
          <button onClick={() => dispatchHandler("INCREASE", data)}>+</button>
        )}
      </div>
    </div>
  )
}

export default BasketCard