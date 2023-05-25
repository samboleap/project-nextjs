import Link from 'next/link'
import styles from '../page.module.css'

// static metadata object
export const metadata = {
  title: 'ISTAD - Product',
  description: 'Listing All Products',
}
// create async function to getProducts
async function fetchProducts(){
  //similar to getServerSideProps
    const resp = await fetch("https://api.escuelajs.co/api/v1/products")
    caches:"no-store"
    return resp.json()
}
export default async function Products() {
    const products = await fetchProducts()
  return (
    <main className={styles.main}>
     {
        products.map(
            product => (
              <>
                <Link href={`/products/${product.id}`}>
                <h1>{product.title}</h1>
                </Link>
              </>
            )
        )
     }
    </main>
  )
}