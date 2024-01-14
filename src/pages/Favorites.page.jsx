import React from 'react';
import { Favorites } from '../presentation/components/favorites/Favorites';
import { Header } from '../presentation/components/common/header/Header';
import { Navigate } from 'react-router-dom';

export const FavoritesPage = ({ auth }) => {
	const isAuthenticated = auth !== 'N';
	const userUid = isAuthenticated ? auth.uid : null;
	return isAuthenticated ? (
		<>
			<Header />
			<Favorites userId={userUid} />
		</>
	) : (
		<Navigate to='/' />
	);
};
