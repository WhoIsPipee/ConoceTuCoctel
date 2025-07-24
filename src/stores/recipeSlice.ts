import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"


export type RecipesSlicesType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}

export const createRecipesSlices : StateCreator<RecipesSlicesType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        console.log(categories)
        set({
           categories
        })
    }
})