import React from 'react';
import bookmark from '../../../assets/images/bookmark.png';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.svg';

export const Card = ({ bookData }) => {
	const navigate = useNavigate();
	const { name, transactionType, price, images, userOwner, uid } = bookData;

	const redirectWhatsapp = () => {
		window.open(
			'https://api.whatsapp.com/send?phone=595971736193&text=M%C3%A1s+informaci%C3%B3n+por+favor',
			'_blank',
			'noreferrer'
		);
	};

	const redirect = ({uid})=>{
		navigate('/details',{state: uid})
	}
	return (
		<>
			<div>
				<div className='card' style={{ width: '18rem' }} id='book-8'>
					{/* <Link to='/details' bookDetails={{ name }}> */}
					<div className={`id-${uid}`} onClick={()=>{redirect({uid})}}>
						<img src={images[0]} className='card-img-top' height='350' />
					</div>
					{/* </Link> */}

					<div className='card-body'>
						{/* <Link to='/details' bookDetails={{ bookData }}> */}
						<div className={`id-${uid}`} onClick={(e)=>{redirect(e)}}>
							<h5 className='card-title mb-5' style={{ maxHeight: '24px' }}>
								{name}
							</h5>
							<hr className='mx-2' />

							<p className='card-text'>
								<div className='pb-2'>
									<strong>Estado: </strong>
									{transactionType}
								</div>
								<div className='py-2'>
									<strong>Para: </strong>
									{price}
								</div>
								<strong className='text-success d-block'></strong>
							</p>
						</div>
						{/* </Link> */}

						<button
							type='button'
							className='btn btn-primary btn-lg btn-block w-100 btn-contact'
							onClick={redirectWhatsapp}
						>
							Contactar
						</button>

						<section className='mt-4'>
							<Link to='/user-profile'>
								<img
									src={avatar}
									alt='Avatar'
									title={userOwner}
									className='avatar'
									width='10'
								/>
								<cite
									className='text-primary pt-2 d-block w-50 users'
									id='user-3'
								>
									{userOwner.name}
								</cite>
							</Link>
							<span className='text-dark float-end pt-2' id='bookmarkContainer'>
								<img
									src={bookmark}
									title='Agregar como favorito'
									className='favourite'
									width='35'
								/>
							</span>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
