import { configureStore } from '@reduxjs/toolkit'
import popUpSlice from '../Features/PopUp/popUpSlice'
import partsSlice from '../Features/Parts/parts'

const store = configureStore({
    reducer: {
        popUp: popUpSlice,
        parts: partsSlice,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
