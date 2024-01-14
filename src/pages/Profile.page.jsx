import React from 'react';
import { UserProfile } from '../presentation/components/profile/UserProfile';
import { Header } from '../presentation/components/common/header/Header';
import { UserBooks } from '../presentation/components/userBooks/UserBooks';
import { CardAddBook } from '../presentation/components/userBooks/CardAddBook';
import { Navigate } from 'react-router-dom';

export const Profile = ({ auth }) => {
	const isAuthenticated = auth !== 'N';
	const uid = isAuthenticated ? auth.uid : null;

	return isAuthenticated ? (
		<>
			<Header />
			<UserProfile userUid={uid} />
			<UserBooks userUid={uid} />
			<CardAddBook />
		</>
	) : (
		<Navigate to='/' />
	);
};
