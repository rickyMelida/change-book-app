import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/Home.page';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { ContactPage } from './pages/Contacts.page';
import { UserBooksPage } from './pages/UserBooks.page';
import { FavoritesPage } from './pages/Favorites.page';
import { MessagesPage } from './pages/Messages.page';
import { Login } from './presentation/components/Login';
import { Logout } from './presentation/components/Logout';
import { EmailVerify } from './presentation/components/EmailVerify';
import { BookDetails } from './presentation/components/BookDetails';
import { Profile } from './pages/Profile.page';
import { verifyAuth } from './services/auth.service';
const UserAuthenticated = () => {
	const uid = localStorage.getItem('uid');
	return (
		<>
			<HashRouter>
				<Routes>
					<Route index path='/' element={<HomePage />} />
					<Route path='/contacts' element={<ContactPage />} />
					<Route path='/my-books' element={<UserBooksPage user={uid} />} />
					<Route path='/my-favorites' element={<FavoritesPage />} />
					<Route path='/messages' element={<MessagesPage />} />
					<Route path='/email' element={<EmailVerify />} />
					<Route path='/details' element={<BookDetails />} />
					<Route path='/user-profile' element={<Profile uid={uid} />} />
					<Route path='/login' element={<Login />} />
					<Route path='/logout' element={<Logout />} />
					<Route path='*' element={<HomePage />} />
				</Routes>
			</HashRouter>
		</>
	);
};

const UserUnauthenticated = () => {
	return (
		<HashRouter>
			<Routes>
				<Route index path='/' element={<HomePage />} />
				<Route path='/contacts' element={<ContactPage />} />
				<Route path='/details' element={<BookDetails />} />
				<Route path='/login' element={<Login />} />
				<Route path='/logout' element={<Logout />} />
				<Route path='/email-verify' element={<EmailVerify />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</HashRouter>
	);
};

export function App() {
	const [auth, setAuth] = useState('N');
	const uid = localStorage.getItem('uid');

	useEffect(() => {
		const fecthAuth = async () => {
			const result = await verifyAuth(uid);
			if (result.message) setAuth('N');
			else setAuth(result);
		};

		fecthAuth();
	}, []);

	if (auth === 'N') {
		return UserUnauthenticated();
	} else {
		return UserAuthenticated();
	}
}
