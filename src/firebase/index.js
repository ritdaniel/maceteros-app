import { getFirestore} from './connection'
import { collection, query, where, getDocs } from "firebase/firestore";

 function documentToProduct(document){
    return{
        id: document.id,
        ...document.data(),
      }
    }
    
export async function getAllProducts (){
      const database = getFirestore()
      const snapshot = await database.collection('productos').get()
      const productos = snapshot.docs.map(documentToProduct)
      return productos
    }
    
    export async function getProductById (productoId){
      const db = getFirestore()
      const prodById = await db.collection('productos').doc(productoId).get()
      if (!prodById.exists){
        return null
      }  
      return documentToProduct(prodById)
      }
    
    export async function getProductByCategory(categoryId){
      const db = getFirestore()
      const snapshot = await db.collection('productos').where('categoryId','==', categoryId).get()
      const productos = snapshot.docs.map(documentToProduct)
      console.log(categoryId)
      return productos
    }

    
    