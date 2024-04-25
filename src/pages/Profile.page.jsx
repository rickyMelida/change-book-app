import React from 'react';
import { UserProfile } from '../presentation/components/profile/UserProfile';
import { Header } from '../presentation/components/common/header/Header';
import { UserBooks } from '../presentation/components/userBooks/UserBooks';
import { CardAddBook } from '../presentation/components/userBooks/CardAddBook';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Profile = () => {
	const auth = useSelector(state => state.auth);

	return auth.uid ? (
		<>
			<Header />
			<UserProfile />
			<UserBooks />
			<CardAddBook />
		</>
	) : (
		<Navigate to='/' />
	);
};
