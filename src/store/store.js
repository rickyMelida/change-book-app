import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth.slice";
import bookSlices from "../slices/book.slices";
import messagesSlice from "../slices/messages.slice";

const rootReducer = combineReducers({
    auth: authSlice,
    book: bookSlices,
    messages: messagesSlice
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
