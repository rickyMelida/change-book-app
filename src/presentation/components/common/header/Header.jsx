import React from 'react';
import { Navbar } from './Navbar';
import { InputSearch } from './InputSearch';
import { UserSection } from './UserSection';
import book from '../../../../assets/images/book.png';

export const Header = () => {
	return (
		<>
			<header id='home'>
				<nav className='navbar navbar-expand-lg bg-light'>
					<div className='container-fluid'>
						<a className='navbar-brand' title='Inicio' href='/'>
							<img src={book} alt='Book Change' width='50' />
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
							<UserSection />
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};
