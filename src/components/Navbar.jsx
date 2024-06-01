import { useCallback } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../submodules/assets/images/logo.png";
import { Groups } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setfilters } from '../store/reducers/filterReducer';
import { setPlayers } from '../store/reducers/playerReducer';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '20%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

Navbar.propTypes = {
  onChange: PropTypes.func
}

export default function Navbar({ onChange }) {
  const dispatch = useDispatch();

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  
  const handleSearch = (e) => {
      onChange('list');
      dispatch(setPlayers([]));
      dispatch(setfilters({type: 'query', value: e}));
      dispatch(setfilters({type: 'search_type', value: 'players'}));
      dispatch(setfilters({type: 'page_number', value: 1}));
  }
    
  const debouncedHandleSearch = useCallback(debounce(handleSearch, 600), []);

  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <img src={logo} width={100} height={50} className='cursor-pointer' onClick={() => onChange('list')}/>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => debouncedHandleSearch(e.target.value)}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton
              aria-label="Create Team"
              color="inherit"
              onClick={() => onChange('team')}
            >
              <Groups />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
