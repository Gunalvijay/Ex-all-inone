import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Ability {
    ability: {
        name: string;
    };
}

interface PokemonData {
    name: string;
    abilities: Ability[];
}

interface PokeState {
    data: PokemonData | null;
    loading: boolean;
    error: string | null;
}

const initialState: PokeState = {
    data: null,
    loading: false,
    error: null
};

export const fetchPokemon = createAsyncThunk(
    "poke/fetchPokemon",
    async () => {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/pikachu"
        );

        const data: PokemonData = await response.json();

        return data;
    }
);

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

            .addCase(fetchPokemon.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch";
            });
    }
});

export const pokeReducers = pokeSlice.reducer;