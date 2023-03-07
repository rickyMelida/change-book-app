import React from 'react';
import { TitleSection } from '../components/common/TitleSection';
import { Card } from '../components/common/Card';
import libro from '../../assets/images/books/libro6.jpg';
import avatar from '../../assets/images/avatar.svg';

export const Outstanding = ({ featureData }) => {
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
			<div className='row bg-light my-5' id='outstanding'>
				{1+1}
				<TitleSection name={'Recientes'} />
				{/* {data.forEach(element => { */}
				<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
					<Card bookData={data} />
				</div>
				{/* /* })} */}
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
		</>
	);
};
