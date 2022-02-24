
export function ItemDetail({product,AddToCart}) {
     return (
 
      <section className="productosDetail">
        <div className="contenidoImgDetail">
        <img
        className="imgDetalle"
        src = { product.producto.foto }
        alt = { product.producto.descripcion }
        />
       </div>
      <div className="contenidoInfoDetail">
        <h6 className="fontCategoria">Categoria: {product.producto.categoria}</h6>
        <h6 className="fontNombre">Nombre: {product.producto.nombre}</h6>
        <h6 className="fontDescripcion">Descripcion: {product.producto.descripcion}</h6><br/>
        <h6 className="fontcarroid">Codigo: {product.producto.sku}</h6><br/>
        <h3 className = "cajaProductos__text--grey" > Stock Disponible { product.producto.stock } </h3>
    </div>
       <div className="contenidoCantDetail">
       <button className = "restar" size={3}> - </button>
       <input 
       size={2}></input>
       <button className = "sumar" size={3}> + </button>
       <p className = "precio" > $ { product.producto.precio }. - </p>  
       <button className = "btn btn-danger btn-sm" onClick={()=>AddToCart(product.producto.precio)}> Agregar Carro </button><br/>
       </div>
      






  </section>
    
    )
  }











 
//   <h1 className = "cajaProductos__title--orange" >{ product.nombre }  </h1>
//   <h3 className = "cajaProductos__text--grey" > { product.producto.descripcion }</h3>  
 
//   <p className = "precio" > $ { product.producto.precio }. - </p>  
//   <button className = "btn btn-danger btn-sm"> Agregar Carro </button><br/>
//   <h3 className = "cajaProductos__text--grey" > Stock Disponible { product.stock } </h3>
//   </div>
//  </section >





     

  //    <div className="flex h-[400px]">
  //    <div className="relative w-1/2 bg-gray-100">
  //      <div className="absolute flex flex-col items-start z-10">
  //        <div className="text-3xl font-bold p-2 ">
  //        {product.producto.nombre}
  //        </div>
  //        <div className="text-xl font-bold p-2 bg-gray-900 ">
           
  //        </div>
  //      </div>
  //      <img
  //      src={product.producto.foto}
  //        className="object-contain"
  //        width="30%"
  //      />
  //    </div>
  //    <div className="w-1/2 p-10">
  //      <div className="text-4xl font-bold mb-4">{ product.producto.medida}</div>
       
  //    </div>
  //  </div>









// <section className = "productos" aling="center" >         
// <h1 className = "cajaProductos__title--orange" >{ product.nombre }  </h1>
// <img
// src = { product.foto }
// alt = { product.descripcion }/> 
// <h3 className = "cajaProductos__text--grey" > { product.descripcion }</h3>  
// <p className = "precio" > $ { product.precio }. - </p>  
// <button className = "btn btn-danger btn-sm" > Agregar Carro </button><br/>
// <h3 className = "cajaProductos__text--grey" > Stock Disponible { product.stock } </h3>
// </section >