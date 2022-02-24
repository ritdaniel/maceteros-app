import CarroCompras from "../components/CarroCompras"
export default function PageCar() {
    
return (
    <CarroCompras/>
  
)}   

//         const restarcant = document.createElement('button');
//         restarcant.setAttribute('class', 'restar');
//         restarcant.setAttribute('id', `resta${productoCarro.indice}`);
//         // desabilita el boton restar cuando la cantidad es 1
//         if (productoCarro.cantidad == 1) {
//             restarcant.setAttribute("disabled", true);
//         }
//         restarcant.innerHTML = `&nbsp - &nbsp`;
//         contenidoCant.appendChild(restarcant)

//         const inputcant = document.createElement('input');
//         inputcant.setAttribute('minlength', 1);
//         inputcant.setAttribute('maxlength', 2);
//         inputcant.setAttribute('size', 2);
//         inputcant.setAttribute('value', `${productoCarro.cantidad}`);
//         contenidoCant.appendChild(inputcant)

//         const sumarcant = document.createElement('button');
//         sumarcant.setAttribute('class', 'sumar');
//         sumarcant.setAttribute('id', `suma${productoCarro.indice}`);
//         sumarcant.innerHTML = `&nbsp + &nbsp <br>`;
//         contenidoCant.appendChild(sumarcant);

//         const eliminarprod = document.createElement('button');
//         eliminarprod.setAttribute('class', 'btn btn-danger');
//         eliminarprod.setAttribute('id', `elimina${productoCarro.indice}`);
//         eliminarprod.innerHTML = `Eliminar`;
//         contenidoCant.appendChild(eliminarprod);

//         mostrandoCarro.appendChild(contenidoCant);

//         const contenidoValor = document.createElement('div');
//         contenidoValor.setAttribute('class', 'contenidoValor')

//         const precioprod = document.createElement('h5');
//         precioprod.setAttribute('class', 'fontPrecioUnitario')
//         precioprod.innerText = `$ ${productoCarro.precio}.- c/u`;
//         contenidoValor.appendChild(precioprod);

//         mostrandoCarro.appendChild(contenidoValor);

//         const contenidoTotal = document.createElement('div');
//         contenidoTotal.setAttribute('class', 'contenidoTotal')

//         const totalproducto = document.createElement('h5');
//         totalproducto.setAttribute('class', 'fontPrecio');
//         totalproducto.innerText = `$ ${productoCarro.total}.-`;

//         contenidoTotal.appendChild(totalproducto);

//         mostrandoCarro.appendChild(contenidoTotal);
//         contenedor.appendChild(mostrandoCarro);

//         let tituloPrecio = document.getElementById("montoCompra");
//         tituloPrecio.style.textAlign = "right"; // agregamos estilo (texto al lado derecho)
//         tituloPrecio.innerText = productoCarro.total;

//         document.getElementById(`suma${productoCarro.indice}`).addEventListener('click', () => {
//             sumarcantidad(`${productoCarro.indice}`);
//         });

//         document.getElementById(`resta${productoCarro.indice}`).addEventListener('click', () => {
//             restarcantidad(`${productoCarro.indice}`);
//         });
//         document.getElementById(`elimina${productoCarro.indice}`).addEventListener('click', () => {
//             eliminarProducto(`${productoCarro.indice}`, estotal);
//         });
//     }
// });

//     )
// }