import React from 'react';
import { UserProfile } from '../presentation/components/profile/UserProfile';
import { Header } from '../presentation/components/common/header/Header';

export const Profile = () => {
	return (
		<>
			<Header />
			<UserProfile />
		</>
	);
};
