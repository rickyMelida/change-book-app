import React from 'react';
import { book } from '../../assets/images/images';

export const EmailVerify = () => {
	return (
		<>
			<div className='container'>
				<div className='row mt-5 pt-5' style={{ marginTop: '5%' }}>
					<div className='col-6 offset-3 '>
						<div className='mx-auto my-5 text-center'>
							<a className='navbar-brand' href='#' title='Inicio'>
								<img src={book} alt='' width='50' />
							</a>
							<h3 className='text-'>Comprobar correo electronico</h3>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-6 offset-3'>
						<p className='text-center px-5'>
							Hemos enviado un mesaje de correo electronico a{' '}
							<span className='text-secondary bold'>
								<em>ricardomelid92@gmail.com</em>
							</span>{' '}
							para asegurarnos de que eres el propietario. Comprueba tu bandeja
							de entrada y sigue las instrucciones la finalizar la configuracion
							de tu cuenta en Book Change.
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-6 offset-3 text-center'>
						<a href=''>Usar otra cuenta de Book Change</a>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6 offset-3 mt-5'>
						<div
							className='text-center px-5 py-2 rounded-3 '
							style={{ background: 'rgba(0,0,0,0.2)' }}
						>
							© 2020 Copyright:
							<a className='text-white px-2' href='https://mdbootstrap.com/'>
								MDBootstrap.com
							</a>
						</div>
					</div>
				</div>
				<div className='row'></div>
				<div className='row'></div>
			</div>
		</>
	);
};
