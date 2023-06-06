import React from 'react';
import { TitleSection } from '../components/common/TitleSection';
import { Card } from '../components/common/Card';
import getCookie from '../../hooks/getCookie';

export const Others = ({ otherData }) => {
	const currentUserUID = getCookie('uid');

	return (
		<>
			<div className='row bg-light my-5' id='others'>
				<TitleSection name={'Otros'} />

				{otherData.map(element => (
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
