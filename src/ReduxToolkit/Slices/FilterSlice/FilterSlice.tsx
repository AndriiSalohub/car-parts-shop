import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from '@firebase/firestore'
import db from '../../../firebase'

const filterCollectionRef = collection(db, 'filter')

export const getFilterTerm = createAsyncThunk(
    'filter/getFilterTerm',
    async (_, { rejectWithValue, dispatch }) => {
        const data = await getDocs(filterCollectionRef)
        dispatch(setFilterTerm(data.docs.map((doc) => doc.data())))
        dispatch(setFilterId(data.docs.map((doc) => doc.id)))
    }
)

const initialState = {
    filterTerm: '',
    id: '',
}

const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterTerm: (state, action) => {
            state.filterTerm = action.payload[0].filterterm
        },
        setFilterId: (state, action) => {
            state.id = action.payload[0]
        },
        editFilterTerm: (state, action) => {
            state.filterTerm = action.payload
        },
    },
})

export const { setFilterTerm, setFilterId, editFilterTerm } =
    FilterSlice.actions
export default FilterSlice.reducer
