import React from 'react';
import { FormAddBook } from '../presentation/components/userBooks/FormAddBook';
import { Header } from '../presentation/components/common/header/Header';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AddNewBookPage = () => {
	const auth = useSelector(state => state.auth);

	return auth.uid ? (
		<>
			<Header />
			<FormAddBook />
		</>
	) : (
		<Navigate to='/' />
	);
};
