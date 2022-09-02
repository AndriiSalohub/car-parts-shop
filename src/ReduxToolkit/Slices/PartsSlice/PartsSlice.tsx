import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { collection, getDocs } from '@firebase/firestore'
import db from '../../../firebase'

const initialState = {
    parts: [],
}

const partsCollectionRef = collection(db, 'parts')

export const getParts = createAsyncThunk(
    'parts/getParts',
    async (_, { rejectWithValue, dispatch }) => {
        const data = await getDocs(partsCollectionRef)

        dispatch(
            setParts(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    docId: doc.id,
                }))
            )
        )
    }
)

const partsSlice = createSlice({
    name: 'parts',
    initialState,
    reducers: {
        setParts: (state, action) => {
            state.parts = action.payload
        },
        changePartAmount: (state, action) => {
            const currentPart: any = state.parts.find(
                (part: any) => part.id === action.payload
            )
            currentPart.amount += 1
        },
        clearPartAmount: (state, action) => {
            const currentPart: any = state.parts.find(
                (part: any) => part.id === action.payload
            )
            currentPart.amount = 0
        },
    },
    extraReducers: {
        [getParts.fulfilled.type]: () => console.log('fulfilled'),
        [getParts.pending.type]: () => console.log('pending'),
        [getParts.rejected.type]: () => console.log('rejected'),
    },
})

export const { setParts, changePartAmount, clearPartAmount } =
    partsSlice.actions
export default partsSlice.reducer
