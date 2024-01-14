import React from 'react';
import { UserBooks } from '../presentation/components/userBooks/UserBooks';
import { Header } from '../presentation/components/common/header/Header';
import { Navigate } from 'react-router-dom';

export const UserBooksPage = ({ auth }) => {
	const isAuthenticated = auth !== 'N';
	const userUid = isAuthenticated ? auth.uid : null;
	
	return isAuthenticated ? (
		<>
			<Header />
			<UserBooks user={userUid} />
		</>
	) : (
		<Navigate to='/' />
	);
};
