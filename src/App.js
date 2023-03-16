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

const UserUnauthenticated = auth => {
	return (
		<Router>
			<Routes>
				<Route index path='/' element={<HomePage auth={auth} />} />
				<Route path='/login' element={<Login />} />
				{/* <Route path='/contacts' element={<Login />} />
				<Route path='/my-books' element={<Login />} />
				<Route path='/my-favorites' element={<Login />} />
				<Route path='/messages' element={<Login />} />
				<Route path='/email' element={<Login />} />
				<Route path='/user-profile' element={<Login />} /> */}
				<Route path='/details' element={<BookDetails auth={auth} />} />
				<Route path='*' element={<HomePage auth={auth} />} />
			</Routes>
		</Router>
	);
};

export function App({ auth }) {
	if (auth === 'Y') {
		return UserAuthenticated();
	} else {
		return UserUnauthenticated(auth);
	}
}
