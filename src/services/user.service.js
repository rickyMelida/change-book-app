export const getUserData = () => {
	const { userData } = JSON.parse(localStorage.getItem('uid'));

	return userData;
};
