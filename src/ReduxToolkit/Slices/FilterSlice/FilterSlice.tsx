import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filterTerm: 'default sorting',
}

const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterTerm: (state, action) => {
            state.filterTerm = action.payload
        },
    },
})

export const { setFilterTerm } = FilterSlice.actions
export default FilterSlice.reducer
