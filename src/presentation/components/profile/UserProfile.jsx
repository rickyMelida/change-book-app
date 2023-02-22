import React from 'react';
import { avatar } from '../../../assets/images/images';

export const UserProfile = () => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='row my-5'>
						<div className='col-md-6 offset-3'>
							<div className='avatar'>
								<img src={avatar} alt='Avatar' width='80' />
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6 offset-md-3 text-center'>
							<h3>Ricardo Mélida</h3>
							<h6>Asunción - Paraguay</h6>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<hr />
						</div>
					</div>
				</div>

				<div className='row my-5 bg-light p-5' id='my-books'>
					<div className='m-2'>
						<div className='row justify-content-md-center'>
							<div className='col-3 offset-4 pb-3 mx-auto'>
								<h2>
									Libros de <strong>Ricardo</strong>
								</h2>
							</div>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</>
	);
};
