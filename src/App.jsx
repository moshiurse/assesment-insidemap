import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PlayerTab from './components/PlayerTab'
import CreateTeam from './components/CreateTeam';

function App() {

    const [page, setPage] = useState('list');

    return (
        <>
            <Navbar onChange={setPage}/>
            {
                page == 'list' &&
                <PlayerTab />
            }

            {
                page == 'team' &&
                <CreateTeam />
            }
        </>
    )
}

export default App
