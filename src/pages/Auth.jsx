import { verifyAuth } from '../services/auth.service';
import { useDispatch } from 'react-redux';
import { reset, setUser } from '../slices/auth.slice';

export const authentication = () => {
	const accessToken = localStorage.getItem('accessToken');
	const dispatch = useDispatch();
	try {
		verifyAuth(accessToken).then(res => {
			dispatch(reset());
			dispatch(
				setUser({ ...res, displayName: res.name, photoURL: res.picture })
			);
			return true;
		});
	} catch (err) {
		return false;
	}
};
