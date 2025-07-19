import { create } from 'zustand'
import { CreateRecipesSlices } from './recipeslice'

export const useAppStore = create ((...a) => ({
    ...CreateRecipesSlices(...a)
}))