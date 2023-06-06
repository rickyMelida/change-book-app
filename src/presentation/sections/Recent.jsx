import React from 'react';
import { TitleSection } from '../components/common/TitleSection';
import { Card } from '../components/common/Card';
import getCookie from '../../hooks/getCookie';

export const Recent = ({ recentData }) => {
	const currentUserUID = getCookie('uid');

	return (
		<>
			<div className='row bg-light my-5' id='recents'>
				<TitleSection name={'Recientes'} />

				{recentData.map(element =>
					element.userId === currentUserUID ? (
						''
					) : (
						<div
							className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'
							key={element.userId}
						>
							<Card bookData={element} />
						</div>
					)
				)}
			</div>
		</>
	);
};
