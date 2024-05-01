const URL_API = 'https://book-change-api-firebase.onrender.com/api/';

export const getBooks = async () => {
	return await Promise.all([getRecents(5), getFeatured(5), getothers(5)]);
};

export const getRecents = async amount => {
	const url = `${URL_API}book/getRecents/${amount}`;

	const response = await fetch(url);

	return await response.json();
};

export const getFeatured = async amount => {
	const url = `${URL_API}book/getFeaturedBooks/${amount}`;

	const response = await fetch(url);

	return await response.json();
};

const getothers = async amount => {
	const url = `${URL_API}book/getothersBooks/${amount}`;

	const response = await fetch(url);

	return await response.json();
};

export const getBookByUid = async uid => {
	const url = `${URL_API}book/${uid}`;

	const response = await fetch(url);

	return await response.json();
};

export const getUserBooks = async uid => {
	const url = `${URL_API}book/byUser/${uid}`;

	const response = await fetch(url);

	return await response.json();
};

export const setBook = async bookData => {
	const url = `${URL_API}book/set-book`;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(bookData),
	});

	return await response.json();
};

export const setFavourite = async data => {
	const url = `${URL_API}book/setFavourite`;
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return await response.json();
};
