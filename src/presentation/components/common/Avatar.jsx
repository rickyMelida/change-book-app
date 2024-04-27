import React from 'react';
import { avatar } from '../../../assets/images/images';

export const Avatar = ({ user, shortMessage = null }) => {
	const messageToShow = !shortMessage ? <span>{shortMessage}</span> : <span></span>;
	return (
		<>
			<div className='row'>
				<div className='col-md-2'>
					<div className='avatar-sm'>
						<img src={avatar} alt='Avatar' width='30' loading='lazy'/>
					</div>
				</div>
				<div className='col-md-10 ml-2'>
					<strong className='d-block'>{user}</strong>
					{messageToShow}
				</div>
			</div>
		</>
	);
};
