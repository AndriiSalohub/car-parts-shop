import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from '@firebase/firestore'
import db from '../../../firebase'

const currentPageIdCollectionRef = collection(db, 'currentPageId')

export const getCurrentPageId = createAsyncThunk(
    'filter/getFilterTerm',
    async (_, { rejectWithValue, dispatch }) => {
        const data = await getDocs(currentPageIdCollectionRef)

        dispatch(setCurrentPageId(data.docs.map((doc) => doc.data())))
        dispatch(setCurrentPageIdId(data.docs.map((doc) => doc.id)))
    }
)

const initialState = {
    currentPageId: 0,
    id: '',
}

const currentPageIdSlice = createSlice({
    name: 'currentPageId',
    initialState,
    reducers: {
        setCurrentPageId: (state, action) => {
            state.currentPageId = action.payload[0].currentPageId
        },
        setCurrentPageIdId: (state, action) => {
            state.id = action.payload[0]
        },
        setCurrentPageIdByUser: (state, action) => {
            state.currentPageId = action.payload
        },
        increaseCurrentPageId: (state) => {
            state.currentPageId = +state.currentPageId + 1
        },
        decreaseCurrentPageId: (state) => {
            state.currentPageId = +state.currentPageId - 1
        },
    },
})

export const {
    setCurrentPageId,
    setCurrentPageIdId,
    setCurrentPageIdByUser,
    increaseCurrentPageId,
    decreaseCurrentPageId,
} = currentPageIdSlice.actions
export default currentPageIdSlice.reducer
