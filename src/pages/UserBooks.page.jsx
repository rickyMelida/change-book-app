import React from 'react';
import { UserBooks } from '../presentation/components/userBooks/UserBooks';
import { Header } from '../presentation/components/common/header/Header';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const UserBooksPage = () => {
	const auth = useSelector(state => state.auth);

	return auth.uid ? (
		<>
			<Header />
			<UserBooks />
		</>
	) : (
		<Navigate to='/' />
	);
};
