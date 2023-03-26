import React, { useEffect, useState } from 'react';
import { book1, book2, book3, book4 } from '../../../assets/images/books/books';
import { getRecents } from '../../../services/books.service';

export const Slider = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		const getData = async () => {
			const response = await getRecents(5);
			setData(response);
		};

		getData();
	}, []);

	const isEmpty = Object.entries(data).length === 0;

	if (isEmpty) {
		return dataDefault;
	}

	const images = data.map(element => element.images[0]);

	return (
		<>
			<div
				id='carouselExampleControls'
				className='carousel slide'
				data-bs-ride='carousel'
			>
				<div className='carousel-inner' id='carousel-container'>
					{images.map((image, index) => (
						<div className='carousel-item active' key={index}>
							<img src={image} className='d-block w-100' />
						</div>
					))}
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='prev'
				>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Previous</span>
				</button>

				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleControls'
					data-bs-slide='next'
				>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'
					></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</>
	);
};

const dataDefault = () => {
	<>
		<div
			id='carouselExampleControls'
			className='carousel slide'
			data-bs-ride='carousel'
		>
			<div className='carousel-inner' id='carousel-container'>
				<div className='carousel-item active'>
					<img src={book1} className='d-block w-100' />
				</div>
				<div className='carousel-item'>
					<img src={book2} className='d-block w-100' />
				</div>
				<div className='carousel-item'>
					<img src={book3} className='d-block w-100' />
				</div>
				<div className='carousel-item'>
					<img src={book4} className='d-block w-100' />
				</div>
			</div>
			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleControls'
				data-bs-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>

			<button
				className='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleControls'
				data-bs-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	</>;
};
