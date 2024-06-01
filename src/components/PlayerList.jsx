import { Box, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import axios from "../submodules/utils/axios";
import { useEffect, useState } from 'react';
import { Spa } from '@mui/icons-material';

PlayerList.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    list: PropTypes.array,
};

export default function PlayerList(props) {
    const { value, index, list, ...other } = props;
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {
                        list &&
                        list?.map(l => (
                            <div key={l.id} onClick={() => {console.log(l); setSelectedPlayer(l.id)}}>
                            <Card  sx={{ minWidth: 275, marginBottom: 1, padding: 1, cursor: 'pointer' }}>
                                <div className='flex gap-2 items-center'>
                                    <img src={l.playerImage} alt=""  className='h-20 w-24 rounded border-2'/>
                                    <div className='flex flex-col'>
                                        <span className='font-semibold'>{l.playerName}</span>
                                        <img className='h-7 w-12' src={l?.nationImage} alt="" />
                                    </div>
                                    <span className='font-semibold'>Club: {l?.club}</span>
                                </div>
                                {
                                    selectedPlayer == l.id &&
                                    <div className='flex flex-col mt-2'>
                                        <span>First Name: {l.firstName}</span>
                                        <span>Last Name: {l.lastName}</span>
                                        <span>position: {l.positions?.first?.name}</span>
                                    </div>
                                }
                            </Card>
                            </div>
                        ))
                        
                    }
                    
                </Box>
            )}
        </div>
    );
}
