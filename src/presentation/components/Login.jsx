import React, { useRef, useState } from 'react';
import { book } from '../../assets/images/images';
import { signin } from '../../services/auth.service';
import { useNavigate, Link } from 'react-router-dom';
import { Spinner } from './common/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../slices/auth.slice';

export const Login = () => {
	const [textButton, setTextButton] = useState('Iniciar Sesión');
	const [showPassword, setShowPassword] = useState('password');
	const [alert, setAlert] = useState(undefined);
	const { loginMessage } = useSelector(state => state.messages);
	const emailValue = useRef();
	const passwordValue = useRef();
	const navigate = useNavigate();
	const btnLogin = useRef();
	const dispatch = useDispatch();

	const getData = e => {
		setTextButton(<Spinner />);
		btnLogin.current.disabled = true;
		e.preventDefault();
		const [email, password] = [
			emailValue.current.value,
			passwordValue.current.value,
		];

		signin({ email, password }).then(data => {
			if (data.error || !data.emailVerified) {
				const messageAlert = data.message
					? data.message
					: 'Usuario no verificado. Favor verifique su correo electronico para activar su cuenta.';
				setTextButton('Iniciar Sesión');
				btnLogin.current.disabled = false;
				return setAlert(messageAlert);
			}

			dispatch(setUser(data));
			localStorage.setItem('accessToken', data.stsTokenManager.accessToken);

			navigate('/');
		});
	};

	const handleShowPassword = () => {
		setShowPassword(showPassword === 'password' ? 'text' : 'password');
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
										<img src={book} alt='' width='50' loading='lazy' />
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
								<div className='user-box'>
									<input
										type={showPassword}
										className='form-control'
										id='password'
										ref={passwordValue}
									/>

									<span
										className='password-toggle-icon'
										style={{
											float: 'right',
											marginTop: '-9%',
											marginRight: '5%',
											cursor: 'pointer',
										}}
										onClick={handleShowPassword}
									>
										<i className='fas fa-eye'></i>
									</span>
								</div>
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
								!alert || !loginMessage
									? 'alert alert-danger my-5 text-center d-none'
									: 'alert alert-danger my-5 text-center'
							}
							role='alert'
						>
							{alert ?? loginMessage}
						</div>
					</div>
					<div className='col-md-4'></div>
				</div>
			</div>
		</>
	);
};
