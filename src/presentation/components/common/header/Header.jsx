import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { InputSearch } from './InputSearch';
import { UserSection } from './UserSection';
import book from '../../../../assets/images/book.png';
import { LoginIcon } from './LoginIcon';
import { useSelector } from 'react-redux';

export const Header = () => {
	const auth = useSelector(state => state.auth);
	const navigate = useNavigate();

	return (
		<>
			<header id='home'>
				<nav className='navbar navbar-expand-lg bg-light'>
					<div className='container-fluid'>
						<a
							className='navbar-brand d-sticky'
							title='Inicio'
							onClick={() => navigate('/')}
							style={{ cursor: 'pointer' }}
						>
							<img src={book} alt='Book Change' width='50' />

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
							<Navbar />
							<InputSearch />
							{!auth.uid ? <LoginIcon /> : <UserSection />}
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};
