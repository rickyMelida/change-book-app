import React from 'react';
import { Header } from '../common/header/Header';
import { Card } from '../common/Card';
import libro from '../../../assets/images/books/libro6.jpg';
import avatar from '../../../assets/images/avatar.svg';

export const Favorites = () => {
	const data = {
		id: 6,
		title: 'ESCUELA DE TRADING',
		author: 'FRANCISCA SERRANO',
		pages: 272,
		state: 'Usado',
		by: 'Vender',
		imgUrl: libro,
		price: '25.000',
		userOwner: {
			name: 'Johan Doe',
			avatar,
		},
	};
	return (
		<>
		{/* 	<Header /> */}

			<div className='container'>
				<div className='row my-5'>
					<div className='col-md-4 py-3'>
						<h2>Mis Libros Favoritos</h2>
					</div>
					<hr />
				</div>

				<div className='row'>
					<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
						<Card bookData={data} />
					</div>
					<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
						<Card bookData={data} />
					</div>
					<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
						<Card bookData={data} />
					</div>
					<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
						<Card bookData={data} />
					</div>
					<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
						<Card bookData={data} />
					</div>
					<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
						<Card bookData={data} />
					</div>
					<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
						<Card bookData={data} />
					</div>
					<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
						<Card bookData={data} />
					</div>
				</div>
			</div>
		</>
	);
};
