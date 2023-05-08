const URL_API = 'https://book-change-api-firebase.onrender.com/api/';

export const getUserInfo = async uid =>{
	const url = `${URL_API}user/${uid}`;

	const response = await fetch(url);

	return await response.json();
}
