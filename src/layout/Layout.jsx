import styles from "./Layout.module.css"

import { Link } from "react-router-dom"

import { useCart } from "../context/CartProvider"

import { PiShoppingCartSimpleBold } from "react-icons/pi"

function Layout({ children }) {
  const [state] = useCart()

  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link to="/products">Shopping Cart</Link>
        </h1>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        Developed by Emad with React
      </footer>
    </>
  )
}

export default Layout