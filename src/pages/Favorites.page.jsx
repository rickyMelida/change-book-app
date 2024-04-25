import React from 'react';
import { Favorites } from '../presentation/components/favorites/Favorites';
import { Header } from '../presentation/components/common/header/Header';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const FavoritesPage = () => {
	const auth = useSelector(state => state.auth);

	return auth.uid ? (
		<>
			<Header />
			<Favorites />
		</>
	) : (
		<Navigate to='/' />
	);
};
