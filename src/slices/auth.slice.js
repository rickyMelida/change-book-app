import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        getUser: (state, action) => {

        }
    }
});


export const {getUser} = authSlice.actions;
export default authSlice.reducer;