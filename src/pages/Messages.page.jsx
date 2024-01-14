import React from 'react';
import { Message } from '../presentation/components/messages/Message';
import { Header } from '../presentation/components/common/header/Header';
import { Navigate } from 'react-router-dom';

export const MessagesPage = ({ auth }) => {
	const isAuthenticated = auth !== 'N';

	return isAuthenticated ? (
		<>
			<Header />
			<Message />
		</>
	) : (
		<Navigate to='/' />
	);
};
