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
import { Header } from './presentation/components/common/header/Header'

export function App() {
	return (
		<>
			<Router>
				<Header/>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/contacts' element={<ContactPage />} />
					<Route path='/my-books' element={<MyBookPage />} />
					<Route path='/my-favorites' element={<FavoritesPage />} />
					<Route path='/messages' element={<MessagesPage />} />
					<Route path='/email' element={<EmailVerify />} />
				</Routes>
			</Router>
		</>
	);
}
