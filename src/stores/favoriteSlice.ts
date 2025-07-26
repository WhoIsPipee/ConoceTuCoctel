import { type StateCreator} from 'zustand'
import type { Recipe } from '../types'
import { createRecipesSlices, type RecipesSlicesType } from './recipeSlice'

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe : Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const  createFavoriteSlice : StateCreator<FavoriteSliceType & RecipesSlicesType, [], [], FavoriteSliceType> = (set, get, api) => ({
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
        createRecipesSlices(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id )
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites:  JSON.parse(storedFavorites)
            })
        }
    }
})






