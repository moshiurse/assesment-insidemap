import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import TeamPreview from './TeamPreview';

export default function CreateTeam() {
    const [formation, setFormation] = React.useState('');

    const handleChangeFormation = (event) => {
        setFormation(event.target.value);
        console.log(event.target.value);
    };

    const [team, setTeam] = useState([]);

    const onUpdateTeam = () => {

    }

    return (
        <>
        <Box sx={{ width: '100%', marginTop: 10 }}>
            <div className='flex mt-3 gap-3 items-center'>
                <span>Select Formation</span>
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
            </div>

            {
                formation &&
                <div>
                    <TeamPreview formation={formation} onUpdateTeam={onUpdateTeam}/>
                 </div>
            }
           </Box>
        </>
    )
}
