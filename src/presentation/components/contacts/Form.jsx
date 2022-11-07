import React from 'react';

export const Form = () => {
	return (
		<>
			<div className='row mb-5'>
				<div className='col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3'>
					<form>
						<div className='form-group my-4'>
							<input
								type='text'
								className='form-control'
								id='nombre-apellido'
								aria-describedby='emailHelp'
								placeholder='Nombre y Apellido *'
							/>
						</div>
						<div className='form-group my-4'>
							<input
								type='email'
								className='form-control'
								id='email'
								aria-describedby='emailHelp'
								placeholder='Email *'
							/>
						</div>
						<div className='form-group my-4'>
							<input
								type='text'
								className='form-control'
								id='asunto'
								aria-describedby='emailHelp'
								placeholder='Asunto'
							/>
						</div>
						<div className='form-group my-4'>
							<textarea
								className='form-control'
								id='mensaje'
								rows='7'
								placeholder='Mensaje *'
							></textarea>
						</div>
						<button type='submit' className='btn btn-primary btn-lg btn-block'>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
