import { Link } from 'react-router-dom'

 
export function Item({product}) {
    return ( 

      <section className = "productos" aling="center" >
        <h1 className = "cajaProductos__title--orange" >{ product.nombre }  </h1>
        <img
        src = { product.foto }
        alt = { product.descripcion }/> 
        
        <h3 className = "cajaProductos__text--grey" > { product.descripcion }</h3>  
       
        <p className = "precio" > $ { product.precio }. - </p>  
        <Link key={product.id} to={`/productos/${product.id}`} style={{ textDecoration: 'none' }}>
        <button className = "btn btn-secondary btn-sm"> Ver Detalles </button></Link><br/>
        <h3 className = "cajaProductos__text--grey" > Stock Disponible { product.stock } </h3>
       </section >
     
    )
}

