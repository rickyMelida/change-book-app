import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	loginMessage: '',
};
const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessageLogin: (state, action) => {
			return {
				...state,
				loginMessage: action.payload,
			};
		},
	},
});

export const { setMessageLogin } = messagesSlice.actions;
export default messagesSlice.reducer;
