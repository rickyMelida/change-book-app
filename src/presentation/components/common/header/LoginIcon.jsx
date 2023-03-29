import React from 'react';
import { avatar } from '../../../../assets/images/images';

export const LoginIcon = () => {
	return (
		<span className='mx-3 icon' id='session-icon'>
			<a href='/login' title='Iniciar Sesion'>
				<img src={avatar} width='30' alt='Iniciar Sesion' />
			</a>
		</span>
	);
};
