import React from 'react';
import { ButtonUp } from '../common/ButtonUp';
import { Slider } from './Slider';
import { Footer } from '../common/Footer';
import { Others } from '../../sections/Others';
import { Outstanding } from '../../sections/Outstanding';
import { Recent } from '../../sections/Recent';

export const Main = () => {
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
					<Outstanding />
					<Recent />
					<Others />
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
