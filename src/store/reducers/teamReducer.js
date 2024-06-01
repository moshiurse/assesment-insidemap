import { createSlice } from "@reduxjs/toolkit";


export const teamSlice = createSlice({
    name: "team",
    initialState: {
        formation: '',
        team: Array(11).fill({playerName: 'Select Player'}),
    },
    reducers: {
        setTeam: (state, action) => {
            state.team[action.payload.index] = action.payload.value;
        },
        setFormation: (state, action) => {
            state.formation = action.payload;
        }
    }
});

export const { setTeam, setFormation } = teamSlice.actions;
export default teamSlice.reducer;