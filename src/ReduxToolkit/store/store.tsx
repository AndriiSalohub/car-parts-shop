import { configureStore } from '@reduxjs/toolkit'
import PopupSlice from '../Slices/PopupSlice/PopupSlice'
import PartsSlice from '../Slices/PartsSlice/PartsSlice'
import FaqSlice from '../Slices/FaqSlice/FaqSlice'
import FilterSlice from '../Slices/FilterSlice/FilterSlice'
import SearchSlice from '../Slices/SearchSlice/SearchSlice'

const store = configureStore({
    reducer: {
        popup: PopupSlice,
        parts: PartsSlice,
        faq: FaqSlice,
        filter: FilterSlice,
        search: SearchSlice,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
