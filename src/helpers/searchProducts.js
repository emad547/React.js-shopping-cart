const searchInProdcuts = (products, searchText) => {
  if (!searchText) return products;
  
  return products.filter(p => p.title.toLowerCase().includes(searchText.toLowerCase()))
}

export { searchInProdcuts }