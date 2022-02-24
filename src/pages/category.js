import { useParams } from 'react-router-dom'
import { ItemListContainer } from '../components'

export default function CategoryPage() {
 
  const { categoryId } = useParams()
   return  <ItemListContainer query={{categoryId}} />
}
