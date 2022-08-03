import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
}

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        setPopUpOpen: (state) => {
            state.isOpen = true
        },
        setPopUpClose: (state) => {
            state.isOpen = false
        },
    },
})

export const { setPopUpOpen, setPopUpClose } = popUpSlice.actions
export default popUpSlice
