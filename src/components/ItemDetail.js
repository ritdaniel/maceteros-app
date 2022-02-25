import React, { Component } from "react";

export function ItemDetail({product,AddToCart}) {
const[cantidad,setCantidad]= React.useState(1);
const[alertmax,setAlertmax]= React.useState();


function sumar(e){
  if(cantidad<product.producto.stock){
  setCantidad(cantidad + 1);
  
  }
  else{
    setAlertmax("Cantidad maxima Disponible");
  }
  return 
}

function restar(e){
  if (cantidad>1){
  setCantidad(cantidad - 1);}
  setAlertmax("");
  return
}

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
      <h6 className="fontcarroid">Codigo: {product.producto.sku}</h6><br/>
        <h6 className="fontCategoria">Categoria: {product.producto.categoria}</h6>
        <h5 className="fontNombre">Nombre: {product.producto.nombre}</h5>
        <h6 className="fontDescripcion">Medida: {product.producto.medida}</h6>
        <h6 className="fontDescripcion">Color: {product.producto.color}</h6>
        <h6 className="fontDescripcion">Descripcion: {product.producto.descripcion}</h6><br/><br/><br/>
        <h6 className = "fontCategoria" > Stock Disponible { product.producto.stock } </h6>
    </div>
       <div className="contenidoCantDetail">
       <h6 className="fontcarroid Mi">Cantidad</h6>
          <button className = "restar btn-sm MI" onClick = {restar } > - </button> 
          <label className="centrar" >{cantidad}</label> 
           <button  className = "sumar btn-sm" onClick = {sumar } > + </button>
         <br/>
         <p>{alertmax}</p> <br/><br/><br/><br/>
       <p className = "preciodet MI" > $ {cantidad * product.producto.precio}. - </p>  
       <button className = "btn btn-danger btn-sm" > Agregar Carro </button><br/>
       </div>
  </section>
    
    )
  }



 
  