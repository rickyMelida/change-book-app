import Cookie from 'js-cookie';

const setCookie = (cookieName, cookieValue) => {
	const inAnHour = 1 / 24;
	
	Cookie.set(cookieName, cookieValue, {
		expires: 1 / inAnHour,
		secure: true,
		sameSite: 'strict',
		path: '/',
	});
};

export default setCookie;
