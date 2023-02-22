import React from 'react';
import { Message } from '../presentation/components/messages/Message';
import { Header } from '../presentation/components/common/header/Header';

export const MessagesPage = () => {
	return (
		<>
			<Header />
			<Message />;
		</>
	);
};
