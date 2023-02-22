import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/Home.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContactPage } from './pages/Contacts.page';
import { MyBookPage } from './pages/MyBooks.page';
import { FavoritesPage } from './pages/Favorites.page';
import { MessagesPage } from './pages/Messages.page';
import Login from './presentation/components/Login';
import { EmailVerify } from './presentation/components/EmailVerify';
import { Header } from './presentation/components/common/header/Header';
import { BookDetails } from './presentation/components/BookDetails';
import { Profile } from './pages/Profile.page';

const UserAuthenticated = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route index path='/' element={<HomePage />} />
					<Route path='/contacts' element={<ContactPage />} />
					<Route path='/my-books' element={<MyBookPage />} />
					<Route path='/my-favorites' element={<FavoritesPage />} />
					<Route path='/messages' element={<MessagesPage />} />
					<Route path='/email' element={<EmailVerify />} />
					<Route path='/details' element={<BookDetails />} />
					<Route path='/user-profile' element={<Profile />} />
					<Route path='*' element={<HomePage />} />
				</Routes>
			</Router>
		</>
	);
};

const UserUnauthenticated = () => {
	return (
		<Router>
			<Routes>
				<Route index path='/' element={<HomePage />} />
				<Route path='/details' element={<BookDetails />} />
				<Route path='*' element={<Login message={''} />} />
			</Routes>
		</Router>
	);
};

export function App({ auth }) {
	if (auth === 'si') {
		return UserAuthenticated();
	} else {
		return UserUnauthenticated();
	}
}
