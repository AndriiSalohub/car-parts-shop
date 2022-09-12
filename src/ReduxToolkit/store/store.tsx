import { configureStore } from '@reduxjs/toolkit'
import PopupSlice from '../Slices/PopupSlice/PopupSlice'
import PartsSlice from '../Slices/PartsSlice/PartsSlice'
import FaqSlice from '../Slices/FaqSlice/FaqSlice'
import FilterSlice from '../Slices/FilterSlice/FilterSlice'
import SearchSlice from '../Slices/SearchSlice/SearchSlice'
import TotalSlice from '../Slices/TotalSlice/TotalSlice'
import CurrentPageId from '../Slices/CurrentPageId/CurrentPageId'

const store = configureStore({
    reducer: {
        popup: PopupSlice,
        parts: PartsSlice,
        faq: FaqSlice,
        filter: FilterSlice,
        search: SearchSlice,
        total: TotalSlice,
        currentPageId: CurrentPageId,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
