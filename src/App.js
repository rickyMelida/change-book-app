import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/Home.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContactPage } from './pages/Contacts.page';
import { UserBooksPage } from './pages/UserBooks.page';
import { FavoritesPage } from './pages/Favorites.page';
import { MessagesPage } from './pages/Messages.page';
import { Login } from './presentation/components/Login';
import { Logup } from './presentation/components/Logup';
import { EmailVerify } from './presentation/components/EmailVerify';
import { BookDetails } from './presentation/components/BookDetails';
import { Profile } from './pages/Profile.page';
import { verifyAuth } from './services/auth.service';
import { AddNewBookPage } from './pages/AddNewBook.page';
import getCookie from './hooks/getCookie';
import { Provider } from 'react-redux';
import { store } from './store/store';

const UserAuthenticated = (uid, auth) => {
	return (
		<>
			<Provider store={store}>
				<Router>
					<Routes>
						<Route index path='/' element={<HomePage />} />
						<Route path='/contacts' element={<ContactPage />} />
						<Route path='/details' element={<BookDetails />} />
						<Route path='/login' element={<Login />} />
						<Route path='/logout' element={<Logup />} />

						<Route path='/my-books' element={<UserBooksPage auth={auth} />} />
						<Route
							path='/my-favorites'
							element={<FavoritesPage auth={auth} />}
						/>
						<Route path='/messages' element={<MessagesPage auth={auth} />} />
						<Route path='/email' element={<EmailVerify auth={auth} />} />
						<Route path='/user-profile' element={<Profile auth={auth} />} />
						<Route
							path='/add-new-book'
							element={<AddNewBookPage auth={auth} />}
						/>
						<Route path='*' element={<HomePage />} />
					</Routes>
				</Router>
			</Provider>
		</>
	);
};

export function App() {
	const [auth, setAuth] = useState('N');
	const uid = getCookie('uid');

	useEffect(() => {
		const fecthAuth = async () => {
			const result = await verifyAuth(uid);
			if (result.message) setAuth('N');
			else setAuth(result);
		};

		fecthAuth();
	}, []);

	return UserAuthenticated(uid, auth);
}
