import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import TeamPreview from './TeamPreview';
import { useDispatch, useSelector } from 'react-redux';
import { setFormation } from '../store/reducers/teamReducer';

export default function CreateTeam() {
    // const [formation, setFormation] = React.useState('');
    const dispatch = useDispatch();
    const team = useSelector(state => state.team);
    const formation = team?.formation;

    const handleChangeFormation = (event) => {
        // setFormation(event.target.value);
        dispatch(setFormation(event.target.value))
    };

    const onUpdateTeam = () => {

    }

    let addedPlayer = team?.team?.filter(t => t?.id).length;
    let avgAge = team?.team?.reduce((sum, player) => (sum + (isNaN(player.age) ? 0 : Number(player.age))), 0) / addedPlayer;
    let marketValue = team?.team?.reduce((sum, player) => (sum + (isNaN(player.marketValue) ? 0 : Number(player.marketValue))), 0);
    if (isNaN(avgAge)) avgAge = 0;
    if (isNaN(marketValue)) marketValue = 0;

    const validateClubOrCountry = () => {
        const clubCounts = {};
        const countryCounts = {};

        for (const person of team?.team) {
            if (person.club != undefined) {
                if (clubCounts[person.club]) {
                    clubCounts[person.club]++;
                } else {
                    clubCounts[person.club] = 1;
                }
            }

            if (person.country != undefined) {
                if (countryCounts[person.country]) {
                    countryCounts[person.country]++;
                } else {
                    countryCounts[person.country] = 1;
                }
            }
            
            console.log(clubCounts, countryCounts);

            // Check if any club or country count exceeds 2
            if (clubCounts[person.club] > 2 || countryCounts[person.country] > 2) {
                return false;
            }
        }

        return true;
    }

    return (
        <>
            {/* <Box sx={{ width: '100%', marginTop: 10 }}> */}
                <div className='flex flex-wrap mt-20 gap-3 items-center'>
                    <Box sx={{ minWidth: 180 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Formation</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formation}
                                label="Select Formation"
                                onChange={handleChangeFormation}
                            >
                                <MenuItem value='4-3-3'>4-3-3</MenuItem>
                                <MenuItem value='4-4-2'>4-4-2</MenuItem>
                                <MenuItem value='3-4-3'>3-4-3</MenuItem>
                                <MenuItem value='5-2-3'>5-2-3</MenuItem>
                                <MenuItem value='5-3-2'>5-3-2</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <span>Player: {addedPlayer}</span>

                    <span className={`${(avgAge < 25 || avgAge > 27) ? 'bg-red-500' : ''}`}>Avg Age: {avgAge.toFixed(2)}</span>

                    <span className={`${(marketValue < 300000 || marketValue > 700000) ? 'bg-red-500' : ''}`}>Budget : {marketValue.toFixed(2)} </span>

                    {
                        !validateClubOrCountry() &&
                        <span className='bg-red-500'> Club Or country more than two</span>
                    }
                </div>

                {
                    formation &&
                    <div>
                        <TeamPreview formation={formation} onUpdateTeam={onUpdateTeam} />
                    </div>
                }
            {/* </Box> */}
        </>
    )
}
