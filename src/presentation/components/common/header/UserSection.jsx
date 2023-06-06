import React from 'react';
import { Link } from 'react-router-dom';
import {
	wishList,
	message,
	user,
	logout,
} from '../../../../assets/images/images';
import removeCookie from '../../../../hooks/removeCookie';

export const UserSection = ({ userData }) => {
	const SignOff = () => {
		removeCookie('uid');
		removeCookie('displayName');
	};
	return (
		<>
			<div className='icon-users'>
				<span className='mx-3 icon'>
					<a id='favorites-item' title='Favoritos'>
						<Link
							to='/my-favorites'
							style={{ color: 'gray', textDecoration: 'none' }}
						>
							<img src={wishList} width='30' alt='' />
						</Link>
					</a>
				</span>

				<span className='mx-3 icon'>
					<a id='messages-item' title='Mensajes'>
						<Link
							to='/messages'
							style={{ color: 'gray', textDecoration: 'none' }}
						>
							<img src={message} width='30' alt='message' />
						</Link>
					</a>
				</span>

				<span className='mx-1 dropdown'>
					<div className='dropdown' style={{ float: 'left' }}>
						<a
							className='dropbtn '
							id='my-profile-item'
							title={userData.displayName}
						>
							<Link to='/user-profile'>
								<img
									src={!userData.photoURL ? user : userData.photoURL}
									width='40'
									alt='user'
								/>
							</Link>
						</a>
					</div>
				</span>

				<span
					className='mx-3 icon'
					onClick={() => {
						SignOff();
					}}
				>
					<a id='messages-item' title='Cerrar Sesion'>
						<img src={logout} width='30' alt='Cerrar Sesion' />
					</a>
				</span>
			</div>
		</>
	);
};
