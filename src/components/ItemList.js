import { Item } from './Item'

export function ItemList({ products }) {
  return (
    <div className="flex mx-auto">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          return (
              <Item product={product} key={product.id}/>
          )
        })}
      </div>
    </div>
  )
}