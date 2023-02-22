import React from 'react';
import { Contacts } from '../presentation/components/contacts/Contacts';
import { Header } from '../presentation/components/common/header/Header';

export const ContactPage = () => {
	return (
		<>
			<Header />
			<Contacts />
		</>
	);
};
