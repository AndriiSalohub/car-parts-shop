import { configureStore } from '@reduxjs/toolkit'
import PopupSlice from '../Slices/PopupSlice/PopupSlice'
import PartsSlice from '../Slices/PartsSlice/PartsSlice'
import FaqSlice from '../Slices/FaqSlice/FaqSlice'
import FilterSlice from '../Slices/FilterSlice/FilterSlice'

const store = configureStore({
    reducer: {
        popup: PopupSlice,
        parts: PartsSlice,
        faq: FaqSlice,
        filter: FilterSlice,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
