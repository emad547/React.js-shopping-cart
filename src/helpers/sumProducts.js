const sumProducts = (products) => {
  const itemsCounter = products.reduce((count, currentItem) => count + currentItem.quantity, 0)

  const total = products.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0).toFixed(2)

  return {
    itemsCounter,
    total
  }
}

export { sumProducts }