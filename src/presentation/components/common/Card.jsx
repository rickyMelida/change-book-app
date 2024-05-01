import React, { useState } from 'react';
import bookmark from '../../../assets/images/bookmark.png';
import bookmarkActive from '../../../assets/images/bookmark_active.png';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.svg';
import {
	removeAsFavourite,
	setFavourite,
} from '../../../services/books.service';
import { useDispatch, useSelector } from 'react-redux';
import { verifyAuth } from '../../../services/auth.service';
import { setMessageLogin } from '../../../slices/messages.slice';

const verifyUserInterested = (userInterested, userData) => {
	if (userInterested) return userInterested.includes(userData.uid);

	return false;
};

export const Card = ({ bookData }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {
		name,
		transactionType,
		price,
		images,
		userOwner,
		uid,
		userInterested,
	} = bookData;

	const userData = useSelector(state => state.auth);
	const auth = userData?.stsTokenManager?.accessToken;

	const [markedAsFavourite, setMarkedAsFavourite] = useState(
		verifyUserInterested(userInterested, userData)
	);

	const redirectWhatsapp = () => {
		if (auth) {
			window.open(
				'https://api.whatsapp.com/send?phone=595971736193&text=M%C3%A1s+informaci%C3%B3n+por+favor',
				'_blank',
				'noreferrer'
			);
		} else {
			navigate('/login', {
				state: 'Debe de iniciar sesión para realizar la transaccion.',
			});
		}
	};

	const redirect = ({ uid }) => {
		navigate('/details', { state: uid });
	};

	const handleFavourite = () => {
		verifyAuth(auth)
			.then(resp => {
				if (resp.message) {
					dispatch(
						setMessageLogin('Debe de loguearse para marcar como favorito')
					);
					navigate('/login');
					return;
				}

				if (markedAsFavourite) {
					removeAsFavourite({
						userId: userData.uid,
						bookId: uid,
					}).then(res => {
						setMarkedAsFavourite(!markedAsFavourite);
					});
					console.log('se desmarca');
				} else {
					setFavourite({
						userId: userData.uid,
						bookId: uid,
					}).then(res => {
						setMarkedAsFavourite(!markedAsFavourite);
					});
					console.log('se MARCA');
				}
			})
			.catch(() => {
				navigate('/login');
			});
	};

	return (
		<>
			<div>
				<div className='card' style={{ width: '18rem' }} id='book-8'>
					<div
						className={`id-${uid}`}
						onClick={() => {
							redirect({ uid });
						}}
					>
						<img
							src={images[0]}
							className='card-img-top'
							height='350'
							loading='lazy'
						/>
					</div>

					<div className='card-body' style={{ paddingBottom: '-15px' }}>
						<div
							className={`id-${uid}`}
							onClick={e => {
								redirect(e);
							}}
						>
							<h5 className='card-title mb-5' style={{ maxHeight: '24px' }}>
								{name}
							</h5>
							<hr className='mx-2' />

							<p className='card-text'>
								<div className='pb-1'>
									<strong>Para: </strong>
									{transactionType}
								</div>
								<div className='py-2'>
									<strong>Precio: </strong>
									{price} Gs.
								</div>
								<strong className='text-success d-block'></strong>
							</p>
						</div>

						<button
							type='button'
							className='btn btn-primary btn-lg btn-block w-100 btn-contact'
							onClick={redirectWhatsapp}
						>
							Obtener Libro
						</button>

						<section className='mt-3'>
							<Link
								to='/user-profile'
								state={
									'Debe iniciar sesión para ver el perfil de otro usuario.'
								}
							>
								<span>
									<img
										src={avatar}
										alt='Avatar'
										title={userOwner}
										className='avatar'
										width='10'
										loading='lazy'
									/>
								</span>
							</Link>
							<span
								className='text-dark float-end pt-2 pr-3'
								onClick={handleFavourite}
							>
								<img
									src={markedAsFavourite ? bookmarkActive : bookmark}
									title='Agregar como favorito'
									className='favourite'
									width='35'
									loading='lazy'
								/>
							</span>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
