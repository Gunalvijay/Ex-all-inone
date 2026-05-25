import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counterSlice";
import { pokeReducers } from "../features/pokeSlice";

export const store = configureStore({

    reducer: {
        counter: counterReducer,
        pokemon: pokeReducers
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;