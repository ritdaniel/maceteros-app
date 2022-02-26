import { useReducer } from "react";
import { CarroComprasReducer, EstadoInicialCarro } from "../reducer/CarroComprasReducer";


const CarroCompras =()=>{
const [state, dispatch]= useReducer(CarroComprasReducer, EstadoInicialCarro);

const{productos, cart} = state;

const AddToCart=(id)=>{
    console.log(id)
}
const DeletFromCart=(id)=>{
  console.log(id)
}
const ClearCart=(id)=>{
  console.log(id)
}
return(
<div>
<h1 className="titulo">Carro Compras</h1>
<div className="mostrandoCarro cajaProductos">
 
      <div className="contenidoImg">
        <img
        className="imgCarro"
        />
         </div>
        <div className="contenidoInfo">
        <h6 className="fontCategoria">NombCategoria</h6>
        <h6 className="fontNombre">productoCarro.nombre</h6>
        <h6 className="fontDescripcion">productoCarro.descripcion</h6><br/>
        <h6 className="fontcarroid">productoCarro.codigo</h6><br/>
       <div className="contenidoCant">


       </div>
      </div>
  </div>
  </div>
  
  

  
  )
}
export default CarroCompras;