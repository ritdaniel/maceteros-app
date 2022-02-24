
  import { useParams } from 'react-router-dom'
  import { ItemDetailContainer } from '../components'
  
  export default function PageDetail() {
    const { productoId } = useParams()
  
    return <ItemDetailContainer productoId={productoId} />
  }