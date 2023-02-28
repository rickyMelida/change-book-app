export const getUserData = () => {
	try{

		const { userData } = JSON.parse(localStorage.getItem('uid'));
		return userData;
	}catch(err) {
		return '';
	}

};
