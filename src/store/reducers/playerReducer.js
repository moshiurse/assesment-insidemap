import { createSlice } from "@reduxjs/toolkit";


export const playerSlice = createSlice({
    name: "players",
    initialState: [],
    reducers: {
        setPlayers: (state, action) => {
            return action.payload;
        }
    }
});

export const { setPlayers } = playerSlice.actions;
export default playerSlice.reducer;