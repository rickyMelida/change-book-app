import React, { useRef } from 'react';
import { book } from '../../assets/images/images';
// import { Redirect } from 'react-router-dom'

const Login = () => {
	const email = useRef();
	const password = useRef();

	const getData = e => {
		e.preventDefault();
		console.log(email.current.value, password.current.value);
        if(email.current.value === 'admin@gmail.com' && password.current.value === '12345') {
            // return <Redirect to='/'/>
        }
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

						<form onSubmit={e => getData(e)} className='border border-dark p-4'>
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
									id='emailHelp'
									className='form-text text-muted d-flex justify-content-center'
								>
									¿Eres nuevo por aqui? &nbsp; <br />
									<a href='./logout.html'>Cree su cuenta en Change Books</a>
								</small>
							</div>
						</form>
						<div
							className='alert alert-danger my-3 text-center d-none'
							id='error'
							role='alert'
						></div>
					</div>
					<div className='col-md-4'></div>
				</div>
			</div>
		</>
	);
};

export default Login;
