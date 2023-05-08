import React from 'react';
import { UserBooks } from '../presentation/components/userBooks/UserBooks';
import { Header } from '../presentation/components/common/header/Header';

export const UserBooksPage = ({userUid}) => {
	return (
		<>
			<Header />
			<UserBooks user={userUid}/>
		</>
	);
};
