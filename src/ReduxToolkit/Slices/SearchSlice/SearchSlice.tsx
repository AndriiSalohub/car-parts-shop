import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from '@firebase/firestore'
import db from '../../../firebase'

const searchCollectionRef = collection(db, 'search')

export const getSearchTerm = createAsyncThunk(
    'search/getSearchTerm',
    async (_, { rejectWithValue, dispatch }) => {
        const data = await getDocs(searchCollectionRef)

        dispatch(setSearchTerm(data.docs.map((doc) => doc.data())))
        dispatch(setSearchId(data.docs.map((doc) => doc.id)))
    }
)

const initialState = {
    searchTerm: '',
    id: '',
}

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload[0].searchTerm
        },
        setSearchId: (state, action) => {
            state.id = action.payload[0]
        },
        editSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
    },
})

export const { setSearchTerm, setSearchId, editSearchTerm } =
    SearchSlice.actions
export default SearchSlice.reducer
