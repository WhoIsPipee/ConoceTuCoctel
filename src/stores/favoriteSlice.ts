import { type StateCreator} from 'zustand'
import type { Recipe } from '../types'

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe : Recipe) => void
}

export const  createFavoriteSlice : StateCreator<FavoriteSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink )
            }))
        } else {
            set((state) =>  ({
                favorites: [...state.favorites, recipe]
            }))
        }
    } 
})






