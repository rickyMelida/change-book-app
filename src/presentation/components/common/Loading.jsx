import React from 'react';
import Swal from 'sweetalert2';

export const Loading = () => {
	return (
		<>
			<div className='loader-section ' style={{ with: '500px' }}>
				{Swal.showLoading()}
			</div>
		</>
	);
};
