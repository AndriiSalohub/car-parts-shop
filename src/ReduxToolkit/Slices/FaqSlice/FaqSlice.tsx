import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
}

const FaqSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setFaqVideoOpen: (state) => {
            state.isOpen = true
        },
        setFaqVideoClose: (state) => {
            state.isOpen = false
        },
    },
})

export const { setFaqVideoOpen, setFaqVideoClose } = FaqSlice.actions
export default FaqSlice.reducer
