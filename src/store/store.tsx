import { configureStore } from '@reduxjs/toolkit'
import popUpSlice from '../Features/PopUp/popUpSlice'

const store = configureStore({
    reducer: {
        popUp: popUpSlice.reducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
