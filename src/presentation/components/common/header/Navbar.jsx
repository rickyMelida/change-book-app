import React from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

export const Navbar = ({ auth }) => {
	return (
		<>
			<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
				<li className='nav-item'>
					<a
						className='nav-link active c-pointer'
						aria-current='page'
						id='home-item'
						href='/'
					>
						<Link to='/' style={{ color: 'gray', textDecoration: 'none' }}>
							Home
						</Link>
					</a>
				</li>

				<li className='nav-item dropdown'>
					<a
						className='nav-link dropdown-toggle'
						href='#'
						id='navbarDropdown'
						role='button'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						Libros
					</a>
					<ul
						className='dropdown-menu bg-light'
						aria-labelledby='navbarDropdown'
					>
						<Scrollspy>
							<li>
								<a
									className='dropdown-item'
									id='highlighted-item'
									href='#outstanding'
								>
									Destacados
								</a>
							</li>

							<li>
								<a className='dropdown-item' id='recent-item' href='#recents'>
									Recientes
								</a>
							</li>

							<li>
								<a className='dropdown-item' id='others-item' href='#others'>
									Otros
								</a>
							</li>
						</Scrollspy>
					</ul>
				</li>

				<li className='nav-item'>
					<a className='nav-link' id='contacts-item' href='/contacts'>
						<Link
							to='/contacts'
							style={{ color: 'gray', textDecoration: 'none' }}
						>
							Contactos
						</Link>
					</a>
				</li>

				<li className='nav-item' id='session-item'>
					<a className='nav-link' id='contacts-item' href='/contacts'>
						<Link
							to='/contacts'
							style={{ color: 'gray', textDecoration: 'none' }}
						>
							{auth === 'N' ? 'Iniciar Sesión' : 'Cerrar Sesión'}
						</Link>
					</a>
				</li>

				{auth === 'Y' ? (
					<li className='nav-item'>
						<a
							className='nav-link text-danger'
							id='my-book-item'
							href='/my-books'
						>
							<Link
								to='/my-books'
								style={{ color: 'gray', textDecoration: 'none' }}
							>
								Mis Libros
							</Link>
						</a>
					</li>
				) : (
					''
				)}

				{auth === 'Y' ? (
					<li className='nav-item dropdown users-details' id='users-details'>
						<a
							className='nav-link dropdown-toggle'
							href='#'
							id='navbarDropdown'
							role='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							Perfil
						</a>
						<ul
							className='dropdown-menu bg-light'
							aria-labelledby='navbarDropdown'
						>
							<li>
								<a className='dropdown-item' id='my-profile-item'>
									Mi Perfil
								</a>
							</li>
							<li>
								<a
									className='dropdown-item'
									id='favourite-item'
									href='/favorites'
								>
									Favoritos
								</a>
							</li>
							<li>
								<a
									className='dropdown-item'
									id='messages-item'
									href='/messages'
								>
									Mensajes
								</a>
							</li>
							<li>
								<a className='dropdown-item' id='others-item' href='/logout'>
									Cerrar Sesion
								</a>
							</li>
						</ul>
					</li>
				) : (
					''
				)}
			</ul>
		</>
	);
};
