import React from 'react';
import { Favorites } from '../presentation/components/favorites/Favorites';
import { Header } from '../presentation/components/common/header/Header';

export const FavoritesPage = () => {
	return (
		<>
			<Header />
			<Favorites />
		</>
	);
};
