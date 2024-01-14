import React from 'react';
import { FormAddBook } from '../presentation/components/userBooks/FormAddBook';
import { Header } from '../presentation/components/common/header/Header';
import { Navigate } from 'react-router-dom';

export const AddNewBookPage = ({ auth }) => {
	const isAuthenticated = auth !== 'N';

	return isAuthenticated ? (
		<>
			<Header />
			<FormAddBook />
		</>
	) : (
		<Navigate to='/' />
	);
};
