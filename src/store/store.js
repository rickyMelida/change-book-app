import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth.slice";
import bookSlices from "../slices/book.slices";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        book: bookSlices
    }
})
