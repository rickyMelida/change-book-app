import React from 'react';
import { TitleSection } from '../components/common/TitleSection';
import { Card } from '../components/common/Card';

export const Outstanding = ({ featureData }) => {
	const currentUserUID = localStorage.getItem('uid');

	return (
		<>
			<div className='row bg-light my-5' id='outstanding'>
				<TitleSection name={'Destacados'} />

				{featureData.map(element => (
					<div
						className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'
						key={element.userId}
					>
						{element.userId === currentUserUID ? (
							''
						) : (
							<Card bookData={element} />
						)}
					</div>
				))}
			</div>
		</>
	);
};
