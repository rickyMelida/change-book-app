import React, { useEffect, useRef, useState } from 'react';
import {
	starGray,
	starYellow,
	facebook,
	instagram,
	twitter,
} from '../../assets/images/images';
import { Header } from './common/header/Header';
import { useLocation } from 'react-router-dom';
import { getBookByUid } from '../../services/books.service';
import { Loading } from './common/Loading';
import Swal from 'sweetalert2';
import getCookie from '../../hooks/getCookie';

export const BookDetails = () => {
	const currentUserUID = getCookie('uid');
	const auth = 'N';
	const id = useLocation();
	const [data, setData] = useState({});
	const imageToShow = useRef();
	const previusImage = useRef();

	useEffect(() => {
		const getData = async () => {
			const response = await getBookByUid(id.state);
			setData(response);
		};

		getData();
	}, []);

	const isEmpty = Object.entries(data).length === 0;

	const changeImage = e => {
		const [lastImageSelected] = Array.from(
			document.querySelectorAll('.image-to-show')
		);
		lastImageSelected.classList.remove('image-to-show');

		imageToShow.current.src = e.target.src;
		previusImage.current.classList.remove('image-to-show');
		e.target.classList.add('image-to-show');
	};

	return (
		<>
			<Header auth={auth} />
			<div className='container'>
				{!isEmpty ? (
					<>
						{Swal.close()}
						<div className='row'>
							<div className='col-12 col-sm-10 offset-sm-2 col-md-9 offset-md-3 col-xl-10 offset-xl-2'>
								<img
									src={data.images[0]}
									className='book-image'
									alt=''
									height='500'
									width='350'
									ref={imageToShow}
								/>
							</div>
							<div className='col-offset-xl-8'></div>
						</div>
						<div className='row my-3'>
							<div
								className='col-11 offset-1 col-md-10 offset-md-2'
								id='others-images'
							>
								{data.images.map((elemet, index) => (
									<img
										src={elemet}
										key={index}
										alt=''
										id='book-image1'
										className={
											index === 0
												? 'book-image mr-2 image-to-show'
												: 'book-image mr-2'
										}
										width='90'
										height='130'
										ref={previusImage}
										onClick={e => changeImage(e)}
									/>
								))}
							</div>
						</div>
						<div className='row my-5'>
							<div className='col-12 col-md-11 offset-md-1 col-xl-12 offset-xl-0 mb-3'>
								<h2 className='book-title'>{data.name}</h2>
								<h4 className='text-primary book-author'>{data.author}</h4>
							</div>
							<hr />
							<div className='row'>
								<div className='col-12 col-md-4'>
									<h3 className='book-price'>₲ {data.price}</h3>
								</div>

								<div className='col-12 col-md-4'>
									{data.available ? (
										<span className='text-success'>Disponible</span>
									) : (
										<span className='text-danger'>Vendido</span>
									)}
								</div>

								<div className='col-12 col-md-4'>
									<form>
										<div className='form-group'>
											<select
												className='form-control'
												disabled={
													!data.available || data.userId === currentUserUID
												}
											>
												<option>Comprar</option>
												<option>Permutar</option>
											</select>
										</div>
									</form>
								</div>
							</div>
							<div className='row my-5'>
								<div className='col-md-12'>
									<h5>Detalles del Libro</h5>
									<hr />
								</div>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-12'>
											<div className='my-4'>
												<strong className='m-2'>Autor: </strong>
												<span className='text-primary py-1 book-author'>
													{data.author}
												</span>
											</div>

											<div className='my-4'>
												<strong className='m-2'>Resumen: </strong>
												<span className='text-primary py-1'>
													{data.litleDescripcion}
												</span>
											</div>

											<div className='my-4'>
												<strong className='m-2'>Año: </strong>
												<span className='py-1 book-pages font-weight-bolder'>
													{data.year}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr />
							<div className='row'>
								<div className='col-md-6'>
									<span className='pt-3'>Calificaciones: </span>
									<span>
										<img src={starYellow} alt='' width='30' />
									</span>
									<span>
										<img src={starYellow} alt='' width='30' />
									</span>
									<span>
										<img src={starYellow} alt='' width='30' />
									</span>
									<span>
										<img src={starGray} alt='' width='25' />
									</span>
									<span>
										<img src={starGray} alt='' width='25' />
									</span>
								</div>
								<div className='col-md-6 mt-1'>
									<span>Comparti con:</span>
									<a className='text-muted px-2' href='#'>
										<img src={facebook} alt='' width='14' />
									</a>
									<a className='text-muted px-2' href='#'>
										<img src={instagram} alt='' width='14' />
									</a>
									<a className='text-muted px-2' href='#'>
										<img src={twitter} alt='' width='14' />
									</a>
								</div>
							</div>
						</div>
						<div className='row mb-5'>
							<div className='col-12 col-md-6 mx-auto mb-3'>
								<button
									type='button'
									className='btn btn-primary btn-lg btn-block'
									disabled={data.userId === currentUserUID}
								>
									Confirmar Transaccion
								</button>
							</div>
						</div>
					</>
				) : (
					<Loading />
				)}
			</div>
		</>
	);
};
