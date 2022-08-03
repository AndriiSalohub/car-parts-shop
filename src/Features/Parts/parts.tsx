import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    parts: [],
}

export const getParts = createAsyncThunk(
    'parts/getParts',
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        )

        dispatch(setParts(res.data))
    }
)
const partsSlice = createSlice({
    name: 'parts',
    initialState,
    reducers: {
        setParts: (state, action) => {
            state.parts = action.payload
        },
    },
    extraReducers: {
        [getParts.fulfilled.type]: () => console.log('fulfilled'),
        [getParts.pending.type]: () => console.log('pending'),
        [getParts.rejected.type]: () => console.log('rejected'),
    },
})

export const { setParts } = partsSlice.actions
export default partsSlice.reducer
