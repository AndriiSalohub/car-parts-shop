import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
}

const popUpSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopupOpen: (state) => {
            state.isOpen = true
        },
        setPopupClose: (state) => {
            state.isOpen = false
        },
    },
})

export const { setPopupOpen, setPopupClose } = popUpSlice.actions
export default popUpSlice.reducer
