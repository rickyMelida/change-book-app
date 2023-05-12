import React from 'react';
import addbook from '../../../assets/images/addbook.png';
import { Link } from 'react-router-dom';

export const CardAddBook = () => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<Link to='/add-new-book'>
						<div className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'>
							<div
								className='card card-add-book border-0 bg-light'
								title='Agregar nuevo libro'
								style={{ width: '18rem' }}
							>
								<img
									src={addbook}
									width='100'
									height='350'
									className='card-img-top image-add-book text-center'
									id='add-new-book'
								/>
								<div className='card-body'>
									<h5 className='card-title text-center text-dark'>
										Agregar Libro
									</h5>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};
