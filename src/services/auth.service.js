const URL_API = 'https://book-change-api-firebase.onrender.com/api/';


export const signin = async data => {
	const url = `${URL_API}auth/signin`;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return await response.json();
};

export const signup = async data => {
	const url = `${URL_API}auth/signup`;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return await response.json();
};

export const signout = async () => {
	const url = `${URL_API}auth/signout`;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await response.json();
};

export const verifyAuth = async (uid) => {
	const url = `${URL_API}auth/${uid}`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return await response.json();
};
