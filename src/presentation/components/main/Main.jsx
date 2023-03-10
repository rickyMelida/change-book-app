import React, { useState, useEffect } from 'react';
import { Slider } from './Slider';
import { Footer } from '../common/Footer';
import { Others } from '../../sections/Others';
import { Outstanding } from '../../sections/Outstanding';
import { Recent } from '../../sections/Recent';
import { getBooks } from '../../../services/books.service';
import { Loading } from '../common/Loading';

export const Main = () => {
	const [feature, setFeature] = useState([]);
	const [recent, setRecent] = useState([]);
	const [others, setOthers] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const response = await getBooks(3);

			const [featureData, recentData, othersData] = response;
			setFeature(featureData);
			setRecent(recentData);
			setOthers(othersData);
		};

		loadData();
	}, []);

	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12'>
						<Slider />
					</div>
				</div>

				<div className='row'>
					{feature.length > 0 ? (
						<Outstanding featureData={feature} />
					) : (
						<Loading />
					)}

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
