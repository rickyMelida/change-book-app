import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../../slices/auth.slice';

export const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const auth = useSelector(state => state.auth);

	const redirectLogin = async () => {
		if (auth.uid) dispatch(reset());
		else navigate('/login');
	};
	return (
		<>
			<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
				<li className='nav-item'>
					<a
						className='nav-link active c-pointer'
						aria-current='page'
						id='home-item'
						href=''
					>
						<Link to='/' style={{ color: 'gray', textDecoration: 'none' }}>
							Home
						</Link>
					</a>
				</li>

				<li className='nav-item'>
					<a className='nav-link' id='contacts-item'>
						<Link
							to='/contacts'
							style={{ color: 'gray', textDecoration: 'none' }}
						>
							Contactos
						</Link>
					</a>
				</li>

				{auth.uid ? (
					<li className='nav-item dropdown users-details' id='users-details'>
						<a
							className='nav-link dropdown-toggle'
							href=''
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
									<Link
										to='/user-profile'
										style={{ color: 'black', textDecoration: 'none' }}
									>
										Mi Perfil
									</Link>
								</a>
							</li>
							<li>
								<a className='dropdown-item' id='favourite-item'>
									<Link
										to='/my-favorites'
										style={{ color: 'black', textDecoration: 'none' }}
									>
										Favoritos
									</Link>
								</a>
							</li>
							<li>
								<a className='dropdown-item' id='messages-item'>
									<Link
										to='/messages'
										style={{ color: 'black', textDecoration: 'none' }}
									>
										Mensajes
									</Link>
								</a>
							</li>
						</ul>
					</li>
				) : (
					''
				)}

				<li
					className='nav-item'
					id='session-item'
					onClick={() => redirectLogin()}
				>
					<a
						className='nav-link'
						id='contacts-item'
						style={{ color: 'gray', textDecoration: 'none' }}
					>
						{!auth.uid ? 'Iniciar Sesión' : 'Cerrar Sesión'}
					</a>
				</li>
			</ul>
		</>
	);
};
