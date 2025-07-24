import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlices, type RecipesSlicesType,  } from '../stores/recipeSlice'

export const useAppStore = create<RecipesSlicesType>()(devtools((...a) => ({
    ...createRecipesSlices(...a)
})))