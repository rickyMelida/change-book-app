import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import book from '../../assets/images/book.png';
import { signup } from '../../services/auth.service';

const Spinner = () => {
	return (
		<>
			<div className='spinner-border' role='status'>
				<span className='sr-only'></span>
			</div>
		</>
	);
};

const convertPhoneNumber = phoneNumber => {
	return '+595' + phoneNumber.substr(1, phoneNumber.length);
};

export const Logup = () => {
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const confirmPassword = useRef(null);
	const phone = useRef(null);

	const navigate = useNavigate();
	const regexEMail = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const regexPhone = /^09\d{0,10}$/;

	const [warning, setWarning] = useState(null);
	const [btnText, setBtnText] = useState('Continuar');

	const registerUser = () => {
		if (!regexEMail.test(email.current.value))
			return setWarning('NO es un correo valido');

		if (
			!regexPhone.test(phone.current.value) ||
			phone.current.value.length < 10
		)
			return setWarning('Numero de telefono no valido');

		if (password.current.value !== confirmPassword.current.value)
			return setWarning('Las contraseñas no coinciden');

		const userInfo = {
			email: email.current.value,
			password: password.current.value,
			displayName: name.current.value,
			photoURL:
				'https://firebasestorage.googleapis.com/v0/b/book-change-api.appspot.com/o/users%2Favatar.svg?alt=media&token=cc0b9118-cc36-41ed-b53c-e84728ae68cc',
			phoneNumber: convertPhoneNumber(phone.current.value),
		};

		setBtnText(<Spinner />);

		signup(userInfo)
			.then(response => {
				const { email } = response;
				if (!response.err) navigate('/email-verify', { state: email });
			})
			.catch(err => {
				console.log(err);
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

						<div className='border border-dark p-4'>
							<div className='form-group py-2'>
								<label htmlFor='name' className='font-weight-bold'>
									Nombre
								</label>
								<input
									type='text'
									className='form-control'
									id='name'
									aria-describedby='emailHelp'
									autoComplete='disabled'
									ref={name}
									placeholder='Juan Perez'
								/>
							</div>
							<div className='form-group py-2'>
								<label htmlFor='email' className='font-weight-bold'>
									Correo
								</label>
								<input
									type='email'
									className='form-control'
									id='email'
									aria-describedby='emailHelp'
									autoComplete='disabled'
									ref={email}
									placeholder='juanperez123@gmail.com'
								/>
							</div>
							<div className='form-group py-2'>
								<label htmlFor='phone' className='font-weight-bold'>
									Número de telefono
								</label>
								<input
									type='tel'
									className='form-control'
									id='phone'
									aria-describedby='emailHelp'
									autoComplete='disabled'
									ref={phone}
									placeholder='0981123456'
									maxLength='10'
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
									ref={password}
								/>
							</div>
							<div className='form-group py-2 pb-3'>
								<label htmlFor='confirm-password' className='font-weight-bold'>
									Confirmar Contraseña
								</label>
								<input
									type='password'
									className='form-control'
									id='confirm-password'
									ref={confirmPassword}
								/>
							</div>
							<button
								type='button'
								className='btn btn-dark text-ligth btn-lg btn-block '
								onClick={() => registerUser()}
							>
								{btnText}
							</button>

							<div
								className='alert alert-danger mt-4 text-center'
								style={!warning ? { display: 'none' } : {}}
								role='alert'
							>
								{warning}
							</div>

							<div className='mt-4'>
								<small id='emailHelp' className='form-text text-muted'>
									Al crear una cuenta, acepta las
									<a href=''>
										{' '}
										Condiciones de uso y el Aviso de privacidad{' '}
									</a>{' '}
									de Book Changes.
								</small>
							</div>

							<hr className='line-horizontal my-5' />
							<div className='mt-4'>
								<small
									id='emailHelp'
									className='form-text text-muted d-flex justify-content-center'
								>
									Ya tienes una cuenta &nbsp;
									<Link
										to='/login'
										style={{ color: 'gray', textDecoration: 'none' }}
									>
										<a href=''>Inicia Sesión</a>
									</Link>
								</small>
							</div>
						</div>
					</div>
					<div className='col-md-4'></div>
				</div>
			</div>
		</>
	);
};
