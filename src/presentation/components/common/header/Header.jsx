import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { InputSearch } from './InputSearch';
import { UserSection } from './UserSection';
import book from '../../../../assets/images/book.png';
import { LoginIcon } from './LoginIcon';
import { verifyAuth } from '../../../../services/auth.service';

export const Header = () => {
	const uid = localStorage.getItem('uid');
	const [userData, setUserData] = useState({});
	const [auth, setAuth] = useState('');

	useEffect(() => {
		const fecthAuth = async () => {
			const result = await verifyAuth(uid);
			if (result.message) setAuth('N');
			else setUserData(result);
		};

		fecthAuth();
	}, []);

	return (
		<>
			<header id='home'>
				<nav className='navbar navbar-expand-lg bg-light'>
					<div className='container-fluid'>
						<a className='navbar-brand d-sticky' title='Inicio' href='/'>
							<img src={book} alt='Book Change' width='50' />
							<Link to='/'></Link>
							<h2 className='d-inline' id='p-title'>
								Libros Libres Py
							</h2>
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<Navbar auth={auth} />
							<InputSearch />
							{auth === 'N' ? (
								<LoginIcon />
							) : (
								<UserSection userData={userData} />
							)}
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};
