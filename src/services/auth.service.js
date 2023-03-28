const URL_API = 'https://book-change-api-firebase.onrender.com/api/';

export const signin = async data => {
	const url = `${URL_API}/auth/signin`;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return await response.json();
};

export const verifyAuth = async () => {
	const url = `${URL_API}auth/`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await response.json();
};
