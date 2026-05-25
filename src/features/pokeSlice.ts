import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Poke {
    data: any,
    loading: boolean,
    error: string | null
}

const initialState : Poke = {
    data: [],
    loading: false,
    error: null
}

export const fetchPokemon = createAsyncThunk (
    "poke/fetchPokemon",
    async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        const data = await response.json();
        return data;
    }
)

const pokeSlice = createSlice({
    name: "poke",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchPokemon.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            .addCase(fetchPokemon.rejected, (state, error) => {
                state.loading = false;
                state.error = "Failed to fetch"
            })
    }
})

export const pokeReducers = pokeSlice.reducer;