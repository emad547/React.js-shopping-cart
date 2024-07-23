import { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config'

const ProductsContext = createContext()

function ProductsProvider({ children }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const prodcts = await api.get("/products")
        setProducts(prodcts)
      } catch (error) {
        console.log(error);
      }
    }

    getProducts()
  }, [])
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProducts = () => {
  const products = useContext(ProductsContext)
  return products
}

const useProductDetails = (id) => {
  const products = useContext(ProductsContext)
  const currentProduct = products.find(item => item.id === +id)
  return currentProduct
}

export default ProductsProvider
export { useProducts, useProductDetails }