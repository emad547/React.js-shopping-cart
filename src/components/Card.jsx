import { Link } from "react-router-dom";

import { shortenText } from "../helpers/shortenText";

import { useCart } from "../context/CartProvider";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./Card.module.css"
import { getProductQuantity } from "../helpers/getProductQuantity";


function Card({ data }) {
  const [state, dispatch] = useCart()

  const quantity = getProductQuantity(state, data.id)

  console.log(state);

  const clickHandler = (type) => {
    dispatch({ type, payload: data })
  }

  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} />
      <h3><Link to={`/products/${data.id}`}>{shortenText(data.title)}...</Link></h3>
      <p>{data.price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${data.id}`}><TbListDetails /></Link>

        <div>
          {quantity === 1 && <button onClick={() => clickHandler("REMOVE")}><MdDeleteOutline /></button>}

          {quantity > 1 && <button onClick={() => clickHandler("DECREASE")}>-</button>}

          <span>{!!quantity && quantity}</span>

          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD")}><TbShoppingBagCheck /></button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card