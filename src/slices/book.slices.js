import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	recentsBook: [],
	featuresBook: [],
	otherBooks: [],
};
const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		resetBook: () => initialState,
		setRecentBook: (state, action) => {
			return {
				...state,
				recentsBook: action.payload,
			};
		},
		setFeaturesBooks: (state, action) => {
			return {
				...state,
				featuresBook: action.payload,
			};
		},
		setOtherBook: (state, action) => {
			return {
				...state,
				otherBooks: action.payload,
			};
		},
	},
});

export const { setRecentBook, setFeaturesBooks, setOtherBook, resetBook } =
	bookSlice.actions;
export default bookSlice.reducer;
