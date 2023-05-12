import React, { useRef, useState } from 'react';
import { setBook } from '../../../services/books.service';
import Swal from 'sweetalert2';

const today = () => {
	const date = new Date();
	const day = date.getDate();
	const month =
		date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}/${month}/${year}`.toString();
};

export const FormAddBook = () => {
	const author = useRef();
	const litleDescripcion = useRef();
	const name = useRef();
	const otherDetails = useRef('Ninguno');
	const price = useRef();
	const state = useRef('new');
	const transactionType = useRef('buy');
	const year = useRef();

	const [alert, setAlert] = useState();

	const setData = () => {
		if (!name.current.value)
			return setAlert('El libro debe de tener un nombre.');
		if (!author.current.value)
			return setAlert('El libro debe de tener un autor.');
		if (!litleDescripcion.current.value)
			return setAlert('El libro debe de tener una pequeña descripcion.');
		if (!price.current.value && transactionType.current.value !== 'change')
			return setAlert('El libro debe de tener un precio.');
		if (!year.current.value) return setAlert('El libro debe de tener un año.');

		const bookData = {
			author: author.current.value,
			available: true,
			images: ['https://storage.lpt.com.py/TAPAS/9789877362459.jpg'],
			litleDescripcion: litleDescripcion.current.value,
			name: name.current.value,
			otherDetails: otherDetails.current.value,
			price: price.current.value,
			state: state.current.value,
			transactionType: transactionType.current.value,
			uploadDate: today(),
			userId: localStorage.getItem('uid'),
			userOwner: localStorage.getItem('displayName'),
			year: year.current.value,
		};

		setBook(bookData).then(res => {
			Swal.fire('Great', 'Se agrego nuevo libro correctamente!', 'success');

			author.current.value = null;
			litleDescripcion.current.value = null;
			name.current.value = null;
			otherDetails.current.value = null;
			price.current.value = null;
			state.current.value = null;
			transactionType.current.value = null;
			year.current.value = null;
		});
	};

	return (
		<>
			<div className='container'>
				<div className='row mt-5 mb-3'>
					<div className='col-md-6 col-lg-6 offset-lg-3'>
						<h2 className='text-center'>Agregar Libro</h2>
					</div>
				</div>

				<div className='row mb-5'>
					<div className='col-md-6 col-lg-6 offset-lg-3'>
						<form>
							<div className='form-group my-4'>
								<label htmlFor='book-title'>Titulo del Libro</label>
								<input
									type='text'
									className='form-control'
									id='book-title'
									aria-describedby='emailHelp'
									placeholder='Ej. Romeo y Julieta'
									ref={name}
								/>
							</div>

							<div className='form-group my-4'>
								<label htmlFor='book-author'>Nombre de Autor</label>
								<input
									type='text'
									className='form-control'
									id='book-author'
									aria-describedby='emailHelp'
									placeholder='Ej. William Shakespeare'
									ref={author}
								/>
							</div>

							<div className='form-group my-4'>
								<label htmlFor='book-pages-number'>Detalles</label>
								<input
									type='text'
									className='form-control'
									id='book-pages-number'
									aria-describedby='emailHelp'
									placeholder='Ej. Escrito en la primera pagina, no cuenta con tapa trasera, etc.'
									ref={otherDetails}
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='book-price'>Precio</label>
								<input
									type='number'
									className='form-control'
									id='book-price'
									aria-describedby='emailHelp'
									placeholder='Ej.65000'
									ref={price}
								/>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='year'>Año</label>
								<input
									type='number'
									className='form-control'
									id='year'
									aria-describedby='emailHelp'
									placeholder='2001'
									ref={year}
								/>
							</div>
							<div className='form-group mb-4'>
								<label htmlFor='state-bok' className='text-muted'>
									Estado del Libro:{' '}
								</label>
								<select className='form-control' id='state-bok' ref={state}>
									<option value='new'>Nuevo</option>
									<option value='used'>Usado</option>
									<option value='almost_new'>Semi Nuevo</option>
								</select>
							</div>

							<div className='form-group'>
								<label htmlFor='state-bok' className='text-muted'>
									Lo quiero..
								</label>
								<select
									className='form-control'
									id='state-bok'
									ref={transactionType}
								>
									<option value='buy'>Vender</option>
									<option value='exchange'>Permutar</option>
									<option value='change'>Cambiar</option>
								</select>
							</div>
							<div className='form-group my-4'>
								<label htmlFor='book-price'>Descripción</label>
								<textarea
									className='form-control'
									id='mensaje'
									rows='3'
									placeholder='Ej. El libro tiene pequeños rasguños en la parte de atrás.'
									style={{ resize: 'none' }}
									ref={litleDescripcion}
								></textarea>
							</div>
							<div className='form-group mb-4'>
								<div className='custom-file'>
									<input
										type='file'
										className='custom-file-input'
										id='customFile'
									/>
									<label className='custom-file-label' htmlFor='customFile'>
										Imagen del Libro
									</label>
								</div>
							</div>
							<button
								type='button'
								className='btn btn-primary btn-lg btn-block'
								onClick={() => {
									setData();
								}}
							>
								Subir Libro
							</button>
						</form>
					</div>
				</div>
				<div className='row mb-5'>
					<div className='col-md-6 offset-md-3 col-lg-6 offset-lg-3'>
						<div
							style={!alert ? { display: 'none' } : { display: 'initial' }}
							className='alert alert-danger mx-auto my-2 text-center'
							role='alert'
						>
							{alert}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
