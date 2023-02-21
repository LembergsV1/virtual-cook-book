import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: 'http://localhost:4000/recipes/',
}

export const urlSlice = createSlice({
    name: 'url',
    initialState,
})


export default urlSlice.reducer