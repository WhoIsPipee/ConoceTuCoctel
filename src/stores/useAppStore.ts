import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlices, type RecipesSlicesType,  } from '../stores/recipeSlice'
import {  type FavoriteSliceType, createFavoriteSlice} from './favoriteSlice'
import {  type NotificationSliceType, createNotificationSlice } from './notificationSlice'


export const useAppStore = create<RecipesSlicesType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlices(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))