import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axiosInstance from '../submodules/utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayers } from '../store/reducers/playerReducer';
import PlayerList from "./PlayerList";
import { setfilters } from '../store/reducers/filterReducer';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PlayerTab() {
    const [value, setValue] = useState(0);
    const filters = useSelector(state => state.filter);
    const disPatch = useDispatch();
    const playerList = useSelector(state => state.players);
    const loaderRef = useRef(null);
    const [fetching, setFetching] = useState();
    const [hasMore, setHasMore] = useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getPlayerList = async (page_number) => {
        if (!filters?.query || filters.query.length < 3) return [];
        try {
            let response = await axiosInstance.get(`search/full-search`, {
                params: {
                    ...filters,
                    page_number
                }
            });
            return {
                data: response.data.data.players ?? [],
                count: response.data.data.count.players
            }
        } catch (error) {
            return [];
        }
    };

    const getAllData = async () => {
        if (filters.query < 3) {
            disPatch(setPlayers([]));
            return;
        }
        let allData = []
        setFetching(true);
        let data1 = await getPlayerList(filters.page_number);
        allData = [...data1.data];
        if((playerList.length + allData.length) >= data1.count){
            setHasMore(false);
            setFetching(false);
        }else{
            setHasMore(true);
            let data2 = await getPlayerList(filters.page_number+1);
            allData = [...allData, ...data2.data];
            if((playerList.length + allData.length) >= data2.count){
                setHasMore(false);
                setFetching(false);
            }else{
                setHasMore(true);
            }
        }
       
        let ids = allData.map(d => d.id).join(',');
        getShortInfo(ids, allData);
    };

    const getShortInfo = async(ids, allData) => {
        try {
            let response = await axiosInstance.get(`players/short-info`, {
                params: {
                    player_ids: ids,
                    locale: 'US'
                }
            });
            let details = response.data.data;

            allData.map(d => {
                let exist = details.find(de => de.id == d.id);
                d.positions = exist.positions;
                d.marketValue = exist.marketValue ?? 0;
                d.isGoalkeeper = exist.isGoalkeeper;
                d.age = exist.age;
            })

            disPatch(setPlayers([...playerList, ...allData]))
            setFetching(false);
        } catch (error) {
            setFetching(false);
            return [];
        }
    }

    const loadMoreProducts = () => {`   `
        disPatch(setfilters({type: 'page_number', value: filters.page_number+2}))
    }

    useEffect(() => {
        getAllData();
        const loaderObserver = new IntersectionObserver((entries) => {
            console.log(entries);
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log('Again is coming....', fetching);
                    if (!fetching) {
                        disPatch(setfilters({ type: 'page_number', value: filters.page_number + 2 }))
                        loaderObserver.disconnect();
                    }
                }
            })
        }
        );

        if (loaderRef.current) {
            loaderObserver.observe(loaderRef.current);
        }

        return () => {
            if (loaderObserver && loaderRef?.current) {
                loaderObserver.unobserve(loaderRef?.current);
            }
        };
    }, [filters]);

    useEffect(() => {
        getAllData();
    }, [])

    return (
        <Box sx={{ width: '100%', marginTop: 10 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Forwards" {...a11yProps(1)} />
                    <Tab label="Midfielders" {...a11yProps(2)} />
                    <Tab label="Defenders" {...a11yProps(3)} />
                    <Tab label="Goalkeepers" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <PlayerList value={value} index={0} list={playerList} />
            <PlayerList value={value} index={1} list={playerList.filter(p => ['CF', 'LW', 'RW', 'SF', 'LF', 'RF', 'CAM'].includes(p?.positions?.first?.shortName))} />
            <PlayerList value={value} index={2} list={playerList.filter(p => ['LM', 'CM', 'RM', 'CAM', 'CDM'].includes(p?.positions?.first?.shortName))} />
            <PlayerList value={value} index={3} list={playerList.filter(p => ['CB', 'LB', 'RB', 'LWB', 'RWB', 'CDM'].includes(p?.positions?.first?.shortName))} />
            <PlayerList value={value} index={4} list={playerList.filter(p => p.isGoalkeeper == true)} />

            {
                (hasMore && !fetching) &&
                <div onClick={loadMoreProducts} ref={loaderRef} className='cursor-pointer font-semibold border rounded flex justify-center items-start p-2'>Loading more players</div>
            }

            {
                fetching &&
                <div className='font-semibold border rounded flex justify-center items-start p-2'>Loading</div>
            }

        </Box>
    );
}