import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        query: '',
        search_type: 'players',
        page_number: 1,
        locale: 'US'
    },
    reducers: {
        setfilters: (state, action) => {
            state[action.payload.type] = action.payload.value;
        }
    }
});

export const { setfilters } = filterSlice.actions;
export default filterSlice.reducer;