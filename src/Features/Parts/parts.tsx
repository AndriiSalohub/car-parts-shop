import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    parts: [],
}

export const getParts = createAsyncThunk(
    'parts/getParts',
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get(
            'https://run.mocky.io/v3/47815820-24a7-43c1-8a61-80e7f4351f0c'
        )

        dispatch(setParts(res.data.parts))
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
