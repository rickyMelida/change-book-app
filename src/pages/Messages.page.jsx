import React from 'react';
import { Message } from '../presentation/components/messages/Message';
import { Header } from '../presentation/components/common/header/Header';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const MessagesPage = () => {
	const auth = useSelector(state => state.auth);

	return auth.uid ? (
		<>
			<Header />
			<Message />
		</>
	) : (
		<Navigate to='/' />
	);
};
