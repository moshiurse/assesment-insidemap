import { Box, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import axios from "../submodules/utils/axios";
import { useEffect } from 'react';

PlayerList.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    list: PropTypes.array,
};

export default function PlayerList(props) {
    const { value, index, list, ...other } = props;
    console.log(list, 'LLLLLLLLLLLLLL');

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
                            <Card key={l.id} sx={{ minWidth: 275, marginBottom: 1, padding: 1, cursor: 'pointer' }}>
                                <div className='flex gap-2 items-center'>
                                    <img src={l.photo} alt=""  className='h-20 w-24 rounded border-2'/>
                                    <div className='flex flex-col'>
                                        <span className='font-semibold'>{l.name}</span>
                                        <span className='font-semibold'>Country: {l.nationality}</span>
                                    </div>
                                    <span className='font-semibold'>Club: {l?.team?.name}</span>
                                </div>
                            </Card>
                        ))
                        
                    }
                    
                </Box>
            )}
        </div>
    );
}
