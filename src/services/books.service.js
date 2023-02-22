const URL_API = 'http://localhost:3300/api/';

export const getBooks = async () => {
	const url = `${URL_API}book`;

	const response = await fetch(url);

	return await response.json();
};


export const getBookByUid = async (uid) => {
	const url = `${URL_API}book/uid=${uid}`;

	const response = await fetch(url);

	return await response.json();
};