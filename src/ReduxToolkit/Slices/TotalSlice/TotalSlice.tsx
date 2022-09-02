import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from '@firebase/firestore'
import db from '../../../firebase'

const totalCollectionRef = collection(db, 'total')

export const getTotal = createAsyncThunk(
    'total/getTotal',
    async (_, { rejectWithValue, dispatch }) => {
        const data = await getDocs(totalCollectionRef)

        dispatch(setTotal(data.docs.map((doc) => doc.data())))
        dispatch(setTotalId(data.docs.map((doc) => doc.id)))
    }
)

const initialState = {
    total: 0,
    id: '',
}

const TotalSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {
        setTotal: (state, action) => {
            state.total = action.payload[0].total
        },
        setTotalId: (state, action) => {
            state.id = action.payload[0]
        },
        increaseTotal: (state) => {
            state.total = state.total + 1
        },
        decreaseTotal: (state) => {
            state.total = state.total - 1
        },
        changeTotalAmount: (state, action) => {
            state.total = state.total - action.payload
        },
    },
})

export const {
    setTotal,
    setTotalId,
    increaseTotal,
    decreaseTotal,
    changeTotalAmount,
} = TotalSlice.actions
export default TotalSlice.reducer
