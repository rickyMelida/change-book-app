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
