function cartItem(item){
    return <p>item es {item.Id}</p>
}


export function CartList(){

    return <div>{
 cartItem.map(item=>  {

    return<cartItem item={item}/>
 }) 
}</div>
}