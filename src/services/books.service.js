const URL_API = 'http://localhost:3300/api/';

export const getBooks = async () => {
	return await Promise.all([getRecents(5), getFeatured(5), getothers(5)]);
};

export const getRecents = async amount => {
	const url = `${URL_API}book/getRecents/amount=${amount}`;

	const response = await fetch(url);

	return await response.json();
};

export const getFeatured = async amount => {
	const url = `${URL_API}book/getFeaturedBooks/amount=${amount}`;

	const response = await fetch(url);

	return await response.json();
};

const getothers = async amount => {
	const url = `${URL_API}book/getothersBooks/amount=${amount}`;

	const response = await fetch(url);

	return await response.json();
};

export const getBookByUid = async uid => {
	const url = `${URL_API}book/uid=${uid}`;

	const response = await fetch(url);

	return await response.json();
};
