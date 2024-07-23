import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { useProducts } from "../context/ProductsProvider"

import Card from "../components/Card"
import Loader from "../components/Loader"
import Search from "../components/Search"
import Categories from "../components/Categories"

import { searchInProdcuts } from "../helpers/searchProducts"
import { filterProducts } from "../helpers/filterProducts"
import { createNewQuery } from "../helpers/createNewQuery"
import { getInitialQuery } from "../helpers/getInitialQuery"
import { isObjectEmpty } from "../helpers/isObjectEmpty"

import styles from "./ProductsPage.module.css"

function ProductsPage() {
  const products = useProducts()

  const [displayed, setDisplayed] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState({})

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplayed(products)
    
    if (!isObjectEmpty(getInitialQuery(searchParams))) {
      setQuery(getInitialQuery(searchParams))
    }
  }, [products])

  useEffect(() => {
    setSearch(query.search || "")

    setSearchParams(query)

    let finalProducts = searchInProdcuts(products, query.search)
    
    finalProducts = filterProducts(finalProducts, query.category)
    
    setDisplayed(finalProducts)
  }, [query])

  const searchHandler = (e) => {
    setQuery(query => (createNewQuery(query, { search })))
  }

  const categoryHandler = (e) => {
    const category = e.target.innerText.toLowerCase()
    setQuery(query => (createNewQuery(query, { category })))
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch} searchHandler={searchHandler} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.length && displayed.map(product => <Card key={product.id} data={product} />)}
        </div>
        <Categories query={query} categoryHandler={categoryHandler} />
      </div>
    </div>
  )
}

export default ProductsPage