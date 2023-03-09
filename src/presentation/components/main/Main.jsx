import React, { useState, useEffect } from 'react';
import { ButtonUp } from '../common/ButtonUp';
import { Slider } from './Slider';
import { Footer } from '../common/Footer';
import { Others } from '../../sections/Others';
import { Outstanding } from '../../sections/Outstanding';
import { Recent } from '../../sections/Recent';
import { getBooks } from '../../../services/books.service';

export const Main = () => {
	const [feature, setFeature] = useState([]);
	const [recent, setRecent] = useState([]);
	const [others, setOthers] = useState([]);
	useEffect(() => {
		getBooks(5)
			.then(res => {
				const [featureData, recentData, othersData] = res;
				setFeature(featureData);
				setRecent(recentData);
				setOthers(othersData);
			})
			.catch(err => {
				console.log(err);
			});
	}, [5]);

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
					<Outstanding featureData={feature} />
					{/* <Recent data={recent} />
					<Others data={others} /> */}
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
