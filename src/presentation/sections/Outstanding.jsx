import React from 'react';
import { TitleSection } from '../components/common/TitleSection';
import { Card } from '../components/common/Card';
import getCookie from '../../hooks/getCookie';
import { useSelector } from 'react-redux';

export const Outstanding = () => {
	const currentUserUID = getCookie('uid');
	const { featuresBook } = useSelector(state => state.book);

	return (
		<>
			<div className='row bg-light my-5' id='outstanding'>
				<TitleSection name={'Destacados'} />

				{featuresBook.map(element =>
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
