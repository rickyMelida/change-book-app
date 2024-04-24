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
		setRecentBook: (state, action) => {
			state.recentsBook.push(action.payload);
		},
		setFeaturesBooks: (state, action) => {
			state.featuresBook.push(action.payload);
		},
		setOtherBook: (state, action) => {
			state.otherBooks.push(action.payload);
		},
	},
});

export const { setRecentBook, setFeaturesBooks, setOtherBook } = bookSlice.actions;
export default bookSlice.reducer;
