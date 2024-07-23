const getProductQuantity = (state, id) => {
  const itemIndex = state.selectedItems.findIndex(item => item.id === id)

  if (itemIndex === -1) {
    return 0
  } else {
    return state.selectedItems[itemIndex].quantity
  }
}

export { getProductQuantity }