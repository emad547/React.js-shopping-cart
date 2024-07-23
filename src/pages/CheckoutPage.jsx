import { useState } from "react";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';

import styles from "./CheckoutPage.module.css"

import BasketCard from "../components/BasketCard"
import BasketSidebar from "../components/BasketSidebar";

import { useCart } from "../context/CartProvider"

import { MdProductionQuantityLimits } from "react-icons/md";

function CheckoutPage() {
  const [isShow, setIsShow] = useState(false)

  const [state, dispatch] = useCart()

  const notify = () => toast.success('Your purchase was successful', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce
  });

  const dispatchHandler = (type, payload) => {
    dispatch({ type, payload })
  }

  const checkoutHandler = () => {
    dispatch({ type: "CHECKOUT" })
    notify()
    setIsShow(true)
  }

  return (
    <div className={styles.checkoutContainer}>
      {state.itemsCounter !== 0 ? (
        <>
          <BasketSidebar data={state} checkoutHandler={checkoutHandler} />
          <div className={styles.basketProducts}>
            {state.selectedItems.map(product => (
              <BasketCard key={product.id} data={product} dispatchHandler={dispatchHandler} />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.noProductContainer}>
          <MdProductionQuantityLimits />
          <h2>No Product Found!</h2>
        </div>
      )}

      <div style={{display: isShow ? "block" : "none"}}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  )
}

export default CheckoutPage