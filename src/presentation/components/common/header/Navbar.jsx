import React from 'react';

export const Navbar = () => {
	return (
		<>
			<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
				<li className='nav-item'>
					<a
						className='nav-link active c-pointer'
						aria-current='page'
						id='home-item'
            href='/home'
					>
						Home
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
					<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
						<li>
							<a
								className='dropdown-item'
								id='highlighted-item'
								href='#destacados'
							>
								Destacados
							</a>
						</li>
						<li>
							<a className='dropdown-item' id='recent-item' href='#recientes'>
								Recientes
							</a>
						</li>
						<li>
							<a className='dropdown-item' id='others-item' href='#otros'>
								Otros
							</a>
						</li>
					</ul>
				</li>

				<li className='nav-item'>
					<a
						className='nav-link'
						id='contacts-item'
						href='/contacts'
					>
						Contactos
					</a>
				</li>

				<li className='nav-item'>
					<a className='nav-link' id='my-book-item' href='/my-books'>
						Mis Libros
					</a>
				</li>

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
					<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
						<li>
							<a className='dropdown-item' id='my-profile-item'>
								Mi Perfil
							</a>
						</li>
						<li>
							<a className='dropdown-item' id='favourite-item'>
								Favoritos
							</a>
						</li>
						<li>
							<a className='dropdown-item' id='messages-item'>
								Mensajes
							</a>
						</li>
						<li>
							<a className='dropdown-item' id='others-item' href='#otros'>
								Cerrar Sesion
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</>
	);
};
