import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PlayerList from './PlayerList';
import axiosInstance from '../submodules/utils/axios';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            // id={`simple-tabpanel-${index}`}
            // aria-labelledby={`simple-tab-${index}`}
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
    let list = [
        {
          "player": {
            "id": 54,
            "name": "Diego Costa",
            "firstname": "Diego",
            "lastname": "da Silva Costa",
            "age": 35,
            "birth": {
              "date": "1988-10-07",
              "place": "Lagarto",
              "country": "Brazil"
            },
            "nationality": "Spain",
            "height": "188 cm",
            "weight": "83 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/54.png"
          },
          "statistics": [
            {
              "team": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Attacker",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 178,
            "name": "Lucas Moura",
            "firstname": "Lucas",
            "lastname": "Rodrigues Moura da Silva",
            "age": 31,
            "birth": {
              "date": "1992-08-13",
              "place": "São Paulo",
              "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "172 cm",
            "weight": "72 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/178.png"
          },
          "statistics": [
            {
              "team": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Attacker",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 297,
            "name": "A. Oxlade-Chamberlain",
            "firstname": "Alexander Mark David",
            "lastname": "Oxlade-Chamberlain",
            "age": 30,
            "birth": {
              "date": "1993-08-15",
              "place": "Portsmouth",
              "country": "England"
            },
            "nationality": "England",
            "height": "180 cm",
            "weight": "70 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/297.png"
          },
          "statistics": [
            {
              "team": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 888,
            "name": "P. Jones",
            "firstname": "Phil Anthony",
            "lastname": "Jones",
            "age": 31,
            "birth": {
              "date": "1992-02-21",
              "place": "Preston",
              "country": "England"
            },
            "nationality": "England",
            "height": "180 cm",
            "weight": "71 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/888.png"
          },
          "statistics": [
            {
              "team": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Defender",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 900,
            "name": "J. Lingard",
            "firstname": "Jesse Ellis",
            "lastname": "Lingard",
            "age": 31,
            "birth": {
              "date": "1992-12-15",
              "place": "Warrington",
              "country": "England"
            },
            "nationality": "England",
            "height": "175 cm",
            "weight": "62 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/900.png"
          },
          "statistics": [
            {
              "team": {
                "id": 65,
                "name": "Nottingham Forest",
                "logo": "https://media.api-sports.io/football/teams/65.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 2473,
            "name": "M. Lanzini",
            "firstname": "Manuel",
            "lastname": "Lanzini",
            "age": 30,
            "birth": {
              "date": "1993-02-15",
              "place": "Ituzaingó",
              "country": "Argentina"
            },
            "nationality": "Argentina",
            "height": "167 cm",
            "weight": "59 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/2473.png"
          },
          "statistics": [
            {
              "team": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 2677,
            "name": "João Moutinho",
            "firstname": "João Filipe",
            "lastname": "Iria Santos Moutinho",
            "age": 37,
            "birth": {
              "date": "1986-09-08",
              "place": "Portimão",
              "country": "Portugal"
            },
            "nationality": "Portugal",
            "height": "170 cm",
            "weight": "61 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/2677.png"
          },
          "statistics": [
            {
              "team": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 18753,
            "name": "Adama Traoré",
            "firstname": "Adama",
            "lastname": "Traoré Diarra",
            "age": 28,
            "birth": {
              "date": "1996-01-25",
              "place": "L'Hospitalet de Llobregat",
              "country": "Spain"
            },
            "nationality": "Spain",
            "height": "178 cm",
            "weight": "86 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/18753.png"
          },
          "statistics": [
            {
              "team": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Attacker",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            },
            {
              "team": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": 17,
                "lineups": 1,
                "minutes": 362,
                "number": null,
                "position": "Attacker",
                "rating": "6.764705",
                "captain": false
              },
              "substitutes": {
                "in": 16,
                "out": 1,
                "bench": 18
              },
              "shots": {
                "total": 10,
                "on": 7
              },
              "goals": {
                "total": 2,
                "conceded": 0,
                "assists": 3,
                "saves": null
              },
              "passes": {
                "total": 111,
                "key": 7,
                "accuracy": 5
              },
              "tackles": {
                "total": 4,
                "blocks": null,
                "interceptions": 1
              },
              "duels": {
                "total": 55,
                "won": 26
              },
              "dribbles": {
                "attempts": 15,
                "success": 9,
                "past": null
              },
              "fouls": {
                "drawn": 4,
                "committed": 5
              },
              "cards": {
                "yellow": 2,
                "yellowred": 0,
                "red": 0
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 18762,
            "name": "T. Davies",
            "firstname": "Thomas",
            "lastname": "Davies",
            "age": 26,
            "birth": {
              "date": "1998-06-30",
              "place": "Liverpool",
              "country": "England"
            },
            "nationality": "England",
            "height": "180 cm",
            "weight": "70 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/18762.png"
          },
          "statistics": [
            {
              "team": {
                "id": 45,
                "name": "Everton",
                "logo": "https://media.api-sports.io/football/teams/45.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            },
            {
              "team": {
                "id": 62,
                "name": "Sheffield Utd",
                "logo": "https://media.api-sports.io/football/teams/62.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": 9,
                "lineups": 2,
                "minutes": 216,
                "number": null,
                "position": "Midfielder",
                "rating": "6.255555",
                "captain": false
              },
              "substitutes": {
                "in": 7,
                "out": 2,
                "bench": 8
              },
              "shots": {
                "total": 2,
                "on": 1
              },
              "goals": {
                "total": 0,
                "conceded": 0,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": 92,
                "key": 1,
                "accuracy": 7
              },
              "tackles": {
                "total": 10,
                "blocks": 1,
                "interceptions": 3
              },
              "duels": {
                "total": 41,
                "won": 17
              },
              "dribbles": {
                "attempts": 7,
                "success": 2,
                "past": null
              },
              "fouls": {
                "drawn": 2,
                "committed": 7
              },
              "cards": {
                "yellow": 2,
                "yellowred": 0,
                "red": 0
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 18849,
            "name": "J. McArthur",
            "firstname": "James",
            "lastname": "McFarlane McArthur",
            "age": 36,
            "birth": {
              "date": "1987-10-07",
              "place": "Glasgow",
              "country": "Scotland"
            },
            "nationality": "Scotland",
            "height": "178 cm",
            "weight": "75 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/18849.png"
          },
          "statistics": [
            {
              "team": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 18852,
            "name": "L. Milivojević",
            "firstname": "Luka",
            "lastname": "Milivojević",
            "age": 32,
            "birth": {
              "date": "1991-04-07",
              "place": "Kragujevac",
              "country": "Yugoslavia"
            },
            "nationality": "Serbia",
            "height": "186 cm",
            "weight": "80 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/18852.png"
          },
          "statistics": [
            {
              "team": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 18854,
            "name": "A. Townsend",
            "firstname": "Andros Darryl",
            "lastname": "Townsend",
            "age": 33,
            "birth": {
              "date": "1991-07-16",
              "place": "London",
              "country": "England"
            },
            "nationality": "England",
            "height": "181 cm",
            "weight": "77 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/18854.png"
          },
          "statistics": [
            {
              "team": {
                "id": 45,
                "name": "Everton",
                "logo": "https://media.api-sports.io/football/teams/45.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            },
            {
              "team": {
                "id": 1359,
                "name": "Luton",
                "logo": "https://media.api-sports.io/football/teams/1359.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": 27,
                "lineups": 14,
                "minutes": 1209,
                "number": null,
                "position": "Midfielder",
                "rating": "6.707407",
                "captain": false
              },
              "substitutes": {
                "in": 13,
                "out": 13,
                "bench": 16
              },
              "shots": {
                "total": 11,
                "on": 7
              },
              "goals": {
                "total": 1,
                "conceded": 0,
                "assists": 3,
                "saves": null
              },
              "passes": {
                "total": 349,
                "key": 18,
                "accuracy": 10
              },
              "tackles": {
                "total": 21,
                "blocks": null,
                "interceptions": 5
              },
              "duels": {
                "total": 125,
                "won": 49
              },
              "dribbles": {
                "attempts": 30,
                "success": 16,
                "past": null
              },
              "fouls": {
                "drawn": 12,
                "committed": 13
              },
              "cards": {
                "yellow": 1,
                "yellowred": 0,
                "red": 0
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": 0,
                "missed": 0,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 18858,
            "name": "A. Begović",
            "firstname": "Asmir",
            "lastname": "Begović",
            "age": 36,
            "birth": {
              "date": "1987-06-20",
              "place": "Trebinje",
              "country": "Bosnia and Herzegovina"
            },
            "nationality": "Bosnia and Herzegovina",
            "height": "199 cm",
            "weight": "101 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/18858.png"
          },
          "statistics": [
            {
              "team": {
                "id": 45,
                "name": "Everton",
                "logo": "https://media.api-sports.io/football/teams/45.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Goalkeeper",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 18878,
            "name": "J. Stanislas",
            "firstname": "Felix Junior",
            "lastname": "Stanislas",
            "age": 34,
            "birth": {
              "date": "1989-11-26",
              "place": "Kidbrooke",
              "country": "England"
            },
            "nationality": "England",
            "height": "183 cm",
            "weight": "76 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/18878.png"
          },
          "statistics": [
            {
              "team": {
                "id": 35,
                "name": "Bournemouth",
                "logo": "https://media.api-sports.io/football/teams/35.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 18891,
            "name": "C. Clark",
            "firstname": "Ciaran",
            "lastname": "Clark",
            "age": 34,
            "birth": {
              "date": "1989-09-26",
              "place": "London",
              "country": "England"
            },
            "nationality": "Republic of Ireland",
            "height": "185 cm",
            "weight": "88 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/18891.png"
          },
          "statistics": [
            {
              "team": {
                "id": 62,
                "name": "Sheffield Utd",
                "logo": "https://media.api-sports.io/football/teams/62.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Defender",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 19174,
            "name": "J. Steer",
            "firstname": "Jed John",
            "lastname": "Steer",
            "age": 31,
            "birth": {
              "date": "1992-09-23",
              "place": "Norwich",
              "country": "England"
            },
            "nationality": "England",
            "height": "183 cm",
            "weight": "80 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/19174.png"
          },
          "statistics": [
            {
              "team": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Goalkeeper",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 19299,
            "name": "J. Colback",
            "firstname": "Jack Raymond",
            "lastname": "Colback",
            "age": 34,
            "birth": {
              "date": "1989-10-24",
              "place": "Killingworth",
              "country": "England"
            },
            "nationality": "England",
            "height": "177 cm",
            "weight": "77 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/19299.png"
          },
          "statistics": [
            {
              "team": {
                "id": 65,
                "name": "Nottingham Forest",
                "logo": "https://media.api-sports.io/football/teams/65.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 19842,
            "name": "L. Taylor",
            "firstname": "Lyle James Alfred",
            "lastname": "Taylor",
            "age": 33,
            "birth": {
              "date": "1990-03-29",
              "place": "Greenwich",
              "country": "England"
            },
            "nationality": "Montserrat",
            "height": "188 cm",
            "weight": "75 kg",
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/19842.png"
          },
          "statistics": [
            {
              "team": {
                "id": 65,
                "name": "Nottingham Forest",
                "logo": "https://media.api-sports.io/football/teams/65.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Attacker",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 130419,
            "name": "M. Longstaff",
            "firstname": "Matthew Ben",
            "lastname": "Longstaff",
            "age": 23,
            "birth": {
              "date": "2000-03-21",
              "place": null,
              "country": "England"
            },
            "nationality": "England",
            "height": null,
            "weight": null,
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/130419.png"
          },
          "statistics": [
            {
              "team": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Midfielder",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        },
        {
          "player": {
            "id": 181822,
            "name": "E. Wady",
            "firstname": "Ethan James",
            "lastname": "Wady",
            "age": 21,
            "birth": {
              "date": "2002-01-23",
              "place": "San Jose",
              "country": "USA"
            },
            "nationality": "USA",
            "height": null,
            "weight": null,
            "injured": false,
            "photo": "https://media.api-sports.io/football/players/181822.png"
          },
          "statistics": [
            {
              "team": {
                "id": 49,
                "name": "Chelsea",
                "logo": "https://media.api-sports.io/football/teams/49.png"
              },
              "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media.api-sports.io/football/leagues/39.png",
                "flag": "https://media.api-sports.io/flags/gb.svg",
                "season": 2023
              },
              "games": {
                "appearences": null,
                "lineups": null,
                "minutes": null,
                "number": null,
                "position": "Goalkeeper",
                "rating": null,
                "captain": false
              },
              "substitutes": {
                "in": null,
                "out": null,
                "bench": null
              },
              "shots": {
                "total": null,
                "on": null
              },
              "goals": {
                "total": null,
                "conceded": null,
                "assists": null,
                "saves": null
              },
              "passes": {
                "total": null,
                "key": null,
                "accuracy": null
              },
              "tackles": {
                "total": null,
                "blocks": null,
                "interceptions": null
              },
              "duels": {
                "total": null,
                "won": null
              },
              "dribbles": {
                "attempts": null,
                "success": null,
                "past": null
              },
              "fouls": {
                "drawn": null,
                "committed": null
              },
              "cards": {
                "yellow": null,
                "yellowred": null,
                "red": null
              },
              "penalty": {
                "won": null,
                "commited": null,
                "scored": null,
                "missed": null,
                "saved": null
              }
            }
          ]
        }
    ];
    let modifiedList = list.map(l => ({...l.player, team: l.statistics[0].team}));
    console.log(modifiedList);
    const [playerList, setPlayerList] = useState(modifiedList);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getPlayerList = async() => {
        let data = await axiosInstance.get(`players`, {
            params: {
                league: 39,
                season: 2023,
                page: 1
            }
        });
        data = data.data;
        console.log(data);
    }

    useEffect(() => {
        // getPlayerList();
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
            <PlayerList value={value} index={1} list={playerList}>
                Item Two
            </PlayerList>
            <PlayerList value={value} index={2} list={playerList}>
                Item Three
            </PlayerList>
            <PlayerList value={value} index={3} list={playerList}>
                Item fOUR
            </PlayerList>
            <PlayerList value={value} index={4} list={playerList}>
                Item Five
            </PlayerList>
        </Box>
    );
}