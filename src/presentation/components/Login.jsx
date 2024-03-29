import React, { useRef, useState } from 'react';
import { book } from '../../assets/images/images';
import { signin } from '../../services/auth.service';
import { useNavigate, Link } from 'react-router-dom';
import { Spinner } from './common/Spinner';
import setCookie from '../../hooks/setCookie';
import removeCookie from '../../hooks/removeCookie';

const setCredentialInCookie = userData => {
	const { uid, displayName } = userData;
	removeCookie('uid');
	removeCookie('displayName');
	setCookie('uid', uid);
	setCookie('displayName', displayName);
};

export const Login = () => {
	const emailValue = useRef();
	const passwordValue = useRef();
	const [alert, setAlert] = useState('');
	const navigate = useNavigate();
	const [textButton, setTextButton] = useState('Iniciar Sesión');
	const btnLogin = useRef();

	const getData = e => {
		setTextButton(<Spinner />);
		btnLogin.current.disabled = true;
		e.preventDefault();
		const [email, password] = [
			emailValue.current.value,
			passwordValue.current.value,
		];

		signin({ email, password }).then(data => {
			if (data.error) {
				setTextButton('Iniciar Sesión');
				btnLogin.current.disabled = false;
				return setAlert(data.message);
			}

			if (!data.emailVerified)
				return setAlert(
					'Usuario no verificado. Favor verifique su correo electronico para activar su cuenta.'
				);
			setCredentialInCookie(data);
			navigate('/');
		});
	};

	return (
		<>
			<div className='container'>
				<div className='row'>
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

						<form
							onSubmit={e => getData(e)}
							className='border border-secondary p-4'
						>
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
								ref={btnLogin}
							>
								{textButton}
							</button>

							<hr className='line-horizontal my-5' />
							<div className='mt-4'>
								<small
									id='emailValueHelp'
									className='form-text text-muted d-flex justify-content-center'
								>
									¿Eres nuevo por aqui? &nbsp; <br />
									<Link
										to='/logout'
										style={{ color: 'gray', textDecoration: 'none' }}
									>
										<a href=''>Cree su cuenta en Change Books</a>
									</Link>
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
