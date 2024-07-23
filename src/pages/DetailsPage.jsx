import { Link, useParams } from "react-router-dom"

import { useProductDetails } from "../context/ProductsProvider"

import Loader from "../components/Loader"

import { SiOpenproject } from "react-icons/si"
import { IoMdPricetag } from "react-icons/io"
import { FaArrowLeft } from "react-icons/fa"

import styles from "./DetailsPage.module.css"

function DetailsPage() {

  const { id } = useParams()

  const product = useProductDetails(id)

  if (!product) return <Loader />

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} />
      <div className={styles.information}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}><SiOpenproject /> {product.category}</p>
        <div>
          <span className={styles.price}><IoMdPricetag /> {product.price} $</span>
          <Link to="/products"><FaArrowLeft /> Back to Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage