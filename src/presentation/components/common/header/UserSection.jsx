import React from 'react';
import { wishList, message, user } from '../../../../assets/images/images';

export const UserSection = () => {
	return (
		<>
			<div className='icon-users'>
				<span className='mx-3'>
					<a href='/my-favorites' id='favorites-item' title='Favoritos'>
						<img src={wishList} width='30' alt='' />
					</a>
				</span>

				<span className='mx-3'>
					<a href='/#' id='messages-item' title='Mensajes'>
						<img src={message} width='30' alt='message' />
					</a>
				</span>

				<span className='mx-1 dropdown'>
					<div className='dropdown' style={{ float: 'left' }}>
						<a
							href='/#'
							className='dropbtn '
							id='my-profile-item'
							title='Mi Perfil'
						>
							<img src={user} width='30' alt='user' />
						</a>
						<div className='dropdown-content' id='profile-option'>
							<a href='#'>Mi Perfil</a>
							<a href='#'>Cerrar Sesion</a>
						</div>
					</div>
				</span>
			</div>
		</>
	);
};
