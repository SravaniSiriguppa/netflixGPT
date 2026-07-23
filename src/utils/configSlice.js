import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState: {
        lang:"en",
        videoSound: false,
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        setVideoSound: (state) => {
            state.videoSound = !state.videoSound
        }
    }
})

export const { changeLanguage, setVideoSound } = configSlice.actions;
export default configSlice.reducer;
