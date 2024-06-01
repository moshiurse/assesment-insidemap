import {configureStore } from "@reduxjs/toolkit";

import playerReducer from "./reducers/playerReducer";
import filterReducer from "./reducers/filterReducer";
import teamReducer from "./reducers/teamReducer";

const loggingMiddleware = (store) => (next) => (action) => {
    // console.log('Previous State:', store.getState());
    // console.log('Action:', action);
    const result = next(action);
    console.log('Next State:', store.getState());
    return result
  };

export default configureStore({
    reducer: {
        players: playerReducer,
        filter: filterReducer,
        team: teamReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggingMiddleware)
});