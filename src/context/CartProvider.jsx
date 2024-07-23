import { useContext } from "react"
import { createContext, useReducer } from "react"

import { sumProducts } from "../helpers/sumProducts"

const CartContext = createContext()

const initialState = {
  selectedItems: [],
  total: 0,
  itemsCounter: 0,
  checkout: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!state.selectedItems.find(item => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 })
      }

      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false
      }

    case "REMOVE":
      const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems)
      }

    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id)

      state.selectedItems[increaseIndex].quantity++

      return {
        ...state,
        ...sumProducts(state.selectedItems)
      }
    
    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(item => item.id === action.payload.id)

      state.selectedItems[decreaseIndex].quantity--

      return {
        ...state,
        ...sumProducts(state.selectedItems)
      }

    case "CHECKOUT":
      return {
        selectedItems: [],
        total: 0,
        itemsCounter: 0,
        checkout: true
      }
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext)
  return [state, dispatch]
}

export default CartProvider
export { useCart }