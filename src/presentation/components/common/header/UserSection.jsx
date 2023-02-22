import React from 'react';
import { Link } from 'react-router-dom';

import {
	wishList,
	message,
	user,
	logout,
} from '../../../../assets/images/images';

export const UserSection = ({ userData }) => {
	return (
		<>
			<div className='icon-users'>
				<span className='mx-3 icon'>
					<a href='/my-favorites' id='favorites-item' title='Favoritos'>
						<img src={wishList} width='30' alt='' />
					</a>
				</span>

				<span className='mx-3 icon'>
					<a href='/messages' id='messages-item' title='Mensajes'>
						<img src={message} width='30' alt='message' />
					</a>
				</span>

				<span className='mx-1 dropdown'>
					<div className='dropdown' style={{ float: 'left' }}>
						<Link to='/user-profile'>
							<a
								href='/#'
								className='dropbtn '
								id='my-profile-item'
								title={userData.displayName}
							>
								<img
									src={!userData.photoURL ? user : userData.photoURL}
									width='40'
									alt='user'
								/>
							</a>
						</Link>
					</div>
				</span>

				<span className='mx-3 icon'>
					<a href='/messages' id='messages-item' title='Cerrar Sesion'>
						<img src={logout} width='30' alt='Cerrar Sesion' />
					</a>
				</span>
			</div>
		</>
	);
};
