import React from 'react';
import { UserProfile } from '../presentation/components/profile/UserProfile';
import { Header } from '../presentation/components/common/header/Header';
import { UserBooks } from '../presentation/components/userBooks/UserBooks';
import { CardAddBook } from '../presentation/components/userBooks/CardAddBook';

export const Profile = ({ uid }) => {
	return (
		<>
			<Header />
			<UserProfile userUid={uid} />
			<UserBooks userUid={uid} />
			<CardAddBook />
		</>
	);
};
