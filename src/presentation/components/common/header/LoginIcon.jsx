import React from 'react';
import { Link } from 'react-router-dom';
import { avatar } from '../../../../assets/images/images';

export const LoginIcon = () => {
	return (
		<span className='mx-3 icon' id='session-icon'>
			<Link to='/login' style={{ color: 'gray', textDecoration: 'none' }}>
				<a href='' title='Inicial Sesion'>
					<img src={avatar} width='30' alt='Iniciar Sesion' loading='lazy'/>
				</a>
			</Link>
		</span>
	);
};
