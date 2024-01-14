import React, { useRef, useState } from 'react';
import { setBook } from '../../../services/books.service';
import Swal from 'sweetalert2';
import { storage } from '../../../services/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import getCookie from '../../../hooks/getCookie';

const today = () => {
	const date = new Date();
	const day = date.getDate();
	const month =
		date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}/${month}/${year}`.toString();
};

const uploadImages = async images => {
	const imagePromises = Array.from(images, image => uploadImage(image));

	const imageRes = await Promise.all(imagePromises);
	return imageRes;
};

const uploadImage = async image => {
	const storageRef = ref(storage, `/books/${Date.now()}-${image.name}`);

	const response = await uploadBytes(storageRef, image);
	const url = await getDownloadURL(response.ref);
	return url;
};

const allFieldsComplete = formData => {
	const error = {
		otherDetails: 'Debe tener algun otro detalle para complementar',
		state: 'Debe de marcar el estado en el cual se encuentra el libro',
		transactionType:
			'Debe de marcar que tipo de transaccion quiere hacer con el libro(vender, cambiar, permutar.)',
		name: 'El libro debe de tener un nombre.',
		author: 'El libro debe de tener un autor.',
		litleDescripcion: 'El libro debe de tener una pequeña descripcion.',
		price: 'El libro debe de tener un precio.',
		year: 'El libro debe de tener un año.',
	};

	for (const element in formData) {
		if (!formData[element]) {
			return { status: false, message: error[element] };
		}
	}

	return { status: true, message: 'OK' };
};

export const FormAddBook = () => {
	const images = useRef();
	const [alert, setAlert] = useState();
	const [uploadedFiles, setUploadedFiles] = useState(true);
	// const [bookInfo, setBookInfo] = useState({
	let bookInfo = {
		name: '',
		author: '',
		otherDetails: 'none',
		price: '',
		year: '',
		litleDescripcion: '',
		state: 'Nuevo',
		transactionType: 'Venta',
	};

	const updateBookInfo = e => {
		bookInfo = {
			...bookInfo,
			[e.target.name]: e.target.value,
		};
	};

	const setData = () => {
		const fieldBookInfo = allFieldsComplete(bookInfo);
		if (!fieldBookInfo.status) {
			return setAlert(fieldBookInfo.message);
		}

		uploadImages(images.current.files)
			.then(res => {
				bookInfo = {
					...bookInfo,
					available: true,
					uploadDate: today(),
					userOwner: getCookie('displayName'),
					userId: getCookie('uid'),
					images: res,
				};

				setBook(bookInfo).then(() => {
					Swal.fire({
						title: 'Success',
						text: 'Se agrego nuevo libro correctamente!',
						icon: 'success',
						confirmButtonText: 'OK',
					});
				});
			})
			.catch(() => {
				setUploadedFiles(false);
			});

		if (!uploadedFiles) {
			return setAlert(
				'Hubo un error al intentar cargar las imagenes. Favor vuelva a intentarlo mas tarde'
			);
		}
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
									name='name'
									onChange={updateBookInfo}
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
									name='author'
									onChange={updateBookInfo}
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
									name='otherDetails'
									onChange={updateBookInfo}
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
									name='price'
									onChange={updateBookInfo}
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
									name='year'
									onChange={updateBookInfo}
								/>
							</div>
							<div className='form-group mb-4'>
								<label htmlFor='state-bok' className='text-muted'>
									Estado del Libro:{' '}
								</label>
								<select
									className='form-control'
									id='state-bok'
									name='state'
									onChange={updateBookInfo}
								>
									<option value='Nuevo'>Nuevo</option>
									<option value='Usado'>Usado</option>
									<option value='Semi Nuevo'>Semi Nuevo</option>
								</select>
							</div>

							<div className='form-group'>
								<label htmlFor='state-bok' className='text-muted'>
									Lo quiero..
								</label>
								<select
									className='form-control'
									id='state-bok'
									name='transactionType'
									onChange={updateBookInfo}
								>
									<option value='Vender'>Vender</option>
									<option value='Permutar'>Permutar</option>
									<option value='Cambiar'>Cambiar</option>
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
									name='litleDescripcion'
									onChange={updateBookInfo}
								></textarea>
							</div>
							<div className='form-group mb-4'>
								<div className='custom-file'>
									<input
										type='file'
										multiple
										className='custom-file-input'
										id='customFile'
										accept='image/*'
										name='images'
										ref={images}
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
