import React from 'react';
import Swal from 'sweetalert2';

export const Loading = () => {
	return (
		<>
        <div className='loader-section '>

			{Swal.showLoading()}
        </div>
		</>
	);
};
