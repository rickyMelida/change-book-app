import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/Home.page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContactPage } from './pages/Contacts.page';
import { MyBookPage } from './pages/MyBooks.page';
import { FavoritesPage } from './pages/Favorites.page';

export function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/contacts' element={<ContactPage />} />
					<Route path='/my-books' element={<MyBookPage />} />
					<Route path='/my-favorites' element={<FavoritesPage />} />
				</Routes>
			</Router>
		</>
	);
}
