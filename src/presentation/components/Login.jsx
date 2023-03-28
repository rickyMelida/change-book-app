import React, { useRef, useState } from 'react';
import { book } from '../../assets/images/images';
import { signin } from '../../services/auth.service';
import { useLocation } from 'react-router-dom';

const setCredentialInLocalStoragge = userData => {
	localStorage.setItem('uid', JSON.stringify(userData));
};

const Login = ({ message }) => {
	const emailValue = useRef();
	const passwordValue = useRef();
	const [alert, setAlert] = useState('');
	const { state } = useLocation();

	const getData = e => {
		e.preventDefault();
		const [email, password] = [
			emailValue.current.value,
			passwordValue.current.value,
		];

		signin({ email, password }).then(data => {
			if (data.error) {
				setAlert(data.message);
			} else {
				setCredentialInLocalStoragge(data);
				window.location.reload(true);
			}
		});
	};

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-4 offset-4 mt-4'>
						<div className='alert alert-danger text-center' role='alert'>
							{state}
						</div>
					</div>
					<div className='col-md-4 offset-md-4'>
						<div className='row m-3'>
							<div className='col-md-12'>
								<div className='mx-auto text-center'>
									<a className='navbar-brand' href='#' title='Inicio'>
										<img src={book} alt='' width='50' />
									</a>
									<h3>Change Books</h3>
								</div>
							</div>
						</div>

						<form onSubmit={e => getData(e)} className='border border-dark p-4'>
							<div className='form-group py-2'>
								<label htmlFor='emailValue' className='font-weight-bold'>
									Correo
								</label>
								<input
									type='emailValue'
									className='form-control'
									id='emailValue'
									aria-describedby='emailValueHelp'
									autoComplete='disabled'
									ref={emailValue}
								/>
							</div>
							<div className='form-group py-2'>
								<label htmlFor='password' className='font-weight-bold'>
									Contraseña
								</label>
								<input
									type='password'
									className='form-control'
									id='password'
									ref={passwordValue}
								/>
							</div>
							<button
								type='submit'
								className='btn btn-dark text-ligth btn-lg btn-block '
								id='btn-submit'
							>
								Iniciar Sesión
							</button>

							<hr className='line-horizontal my-5' />
							<div className='mt-4'>
								<small
									id='emailValueHelp'
									className='form-text text-muted d-flex justify-content-center'
								>
									¿Eres nuevo por aqui? &nbsp; <br />
									<a href='./logout.html'>Cree su cuenta en Change Books</a>
								</small>
							</div>
						</form>
						<div
							className={
								alert === ''
									? 'alert alert-danger my-5 text-center d-none'
									: 'alert alert-danger my-5 text-center'
							}
							role='alert'
						>
							{alert}
						</div>
					</div>
					<div className='col-md-4'></div>
				</div>
			</div>
		</>
	);
};

const toast = () => {
	return (
		<div
			className='toast'
			role='alert'
			aria-live='assertive'
			aria-atomic='true'
		>
			<div className='toast-header'>
				<img src='...' className='rounded me-2' alt='...' />
				<strong className='me-auto'>Bootstrap</strong>
				<small>11 mins ago</small>
				<button
					type='button'
					className='btn-close'
					data-bs-dismiss='toast'
					aria-label='Close'
				></button>
			</div>
			<div className='toast-body'>Hello, world! This is a toast message.</div>
		</div>
	);
};

export default Login;
