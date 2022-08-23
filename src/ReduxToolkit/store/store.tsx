import { configureStore } from '@reduxjs/toolkit'
import PopupSlice from '../Slices/PopupSlice/PopupSlice'
import PartsSlice from '../Slices/PartsSlice/PartsSlice'
import FaqSlice from '../Slices/FaqSlice/FaqSlice'

const store = configureStore({
    reducer: {
        popup: PopupSlice,
        parts: PartsSlice,
        faq: FaqSlice,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
