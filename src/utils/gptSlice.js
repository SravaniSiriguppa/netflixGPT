import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
    {
        name:"gpt",
        initialState: {
            showGptSearch: false,
            gptMovies: null,
            tmdbMovies: null
        },
        reducers :{
            setGptToggling: (state) => {
                state.showGptSearch = !state.showGptSearch;
            },
            addGPTMovies: (state, action) => {
                const {gptMovies, tmdbMovies} = action.payload
                state.gptMovies = gptMovies;
                state.tmdbMovies = tmdbMovies
            },
            clearGPTMovieCards: (state) => {
                state.gptMovies = null;
                state.tmdbMovies = null;
            }
        }
    }
)

export const { setGptToggling, addGPTMovies, clearGPTMovieCards } = gptSlice.actions;
export default gptSlice.reducer;