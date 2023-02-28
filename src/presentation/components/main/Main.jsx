import React from 'react';
import { ButtonUp } from '../common/ButtonUp';
import { Slider } from './Slider';
import { Footer } from '../common/Footer';
import { Others } from '../../sections/Others';
import { Outstanding } from '../../sections/Outstanding';
import { Recent } from '../../sections/Recent';
import { getBooks } from '../../../services/books.service';

export const Main = () => {
	let recent, features, others;

	getBooks()
		.then(res => {
			[recent, features, others] = res;
		})
		.catch(err => {
			console.log(err);
		});
	return (
		<>
			<ButtonUp />
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12'>
						<Slider />
					</div>
				</div>

				<div className='row'>
					<Outstanding data={features.data} />
					<Recent data={recent.data} />
					<Others data={others.data} />
				</div>

				<div className='row'>
					<div className='col-12'>
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};
