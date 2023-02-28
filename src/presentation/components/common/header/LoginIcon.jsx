import React from 'react';
import { avatar } from '../../../../assets/images/images';

export const LoginIcon = () => {
	return (
		<span className='mx-3 icon'>
			<a href='/login' id='messages-item' title='Iniciar Sesion'>
				<img src={avatar} width='30' alt='Iniciar Sesion' />
			</a>
		</span>
	);
};
