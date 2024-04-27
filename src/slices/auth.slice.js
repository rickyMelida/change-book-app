import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},
		reset: (state, action) => initialState,
	},
});

export const { setUser, reset } = authSlice.actions;
export default authSlice.reducer;
