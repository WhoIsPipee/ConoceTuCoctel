import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlices, type RecipesSlicesType,  } from '../stores/recipeSlice'
import {  type FavoriteSliceType, createFavoriteSlice} from './favoriteSlice'


export const useAppStore = create<RecipesSlicesType & FavoriteSliceType>()(devtools((...a) => ({
    ...createRecipesSlices(...a),
    ...createFavoriteSlice(...a)
})))