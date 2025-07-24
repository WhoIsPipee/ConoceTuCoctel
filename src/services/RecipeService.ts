import axios from 'axios'
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema"

export async function getCategories() {
    // La URL necesitaba el protocolo de HTTPS
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list' 
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)

    if(result.success) {
        return result.data
    }
}






//COMPARAR LO QUE HICO CHATGPT CON LO DEL VIDEO , (La URL necesitaba el protocolo de HTTPS)
// import axios from 'axios'
// import { CategoriesAPIResponseSchema } from "../utils/recipes-schema"

// export async function getCategories() {
//     const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list' // ¡agrega el protocolo http/https!
    
//     try {
//         const response = await axios.get(url) // usa axios.get para mayor claridad
//         const result = CategoriesAPIResponseSchema.safeParse(response.data)

//         if (result.success) {
//             console.log("✅ Categorías válidas:", result.data)
//         } else {
//             console.error("❌ Error de validación:", result.error)
//         }
//     } catch (err) {
//         console.error("❌ Error al hacer la petición:", err)
//     }
// }
