import { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import {getProductByCategory, getAllProducts} from '../firebase'

function getProducts(query) {

    const categoryId = query
    if (categoryId) {
      return getProductByCategory(categoryId)
    } else {
      return getAllProducts()
    }
  }

export function ItemListContainer({query}) {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    
    async function fn() {
      setIsLoading(true)
        try {
                  const products = await getProducts(query)
                  setProducts(products)
                } catch (error) {
                  console.error(error)
                } finally {
                  setIsLoading(false)
                }
              }
    fn()
  }, [query])

  return  isLoading ?null:<ItemList products={products} />

}
