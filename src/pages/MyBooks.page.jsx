import React from 'react';
import { MyBooks } from '../presentation/components/myBooks/MyBooks';
import { Header } from '../presentation/components/common/header/Header';

export const MyBookPage = () => {
	return (
		<>
			<Header />
			<MyBooks />
		</>
	);
};
