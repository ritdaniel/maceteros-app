import { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { getProductById } from '../firebase'


export function ItemDetailContainer({ productoId }) {
  
  const [isLoading, setIsLoading] = useState(true)
  const [producto, setProducto] = useState()

  useEffect(() => {
    async function fn() {
      setIsLoading(true)
        try {
            const producto = await getProductById(productoId)
            setProducto(producto)
            } catch (error) {
                console.error(error)
            } finally {
              setIsLoading(false)
            }
    }
    fn()
  }, [productoId])
  
  return isLoading ? null:  <ItemDetail key={productoId} product={{producto}}/>  
}

