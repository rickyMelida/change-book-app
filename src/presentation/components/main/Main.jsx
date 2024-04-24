import React, { useEffect } from 'react';
import { Slider } from './Slider';
import { Footer } from '../common/Footer';
import { Others } from '../../sections/Others';
import { Outstanding } from '../../sections/Outstanding';
import { Recent } from '../../sections/Recent';
import { getBooks } from '../../../services/books.service';
import { Loading } from '../common/Loading';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import {
	setFeaturesBooks,
	setOtherBook,
	setRecentBook,
} from '../../../slices/book.slices';

export const Main = () => {
	const dispatch = useDispatch();
	const books = useSelector(state =>  state.book);
	

	useEffect(() => {
		const loadData = async () => {
			const response = await getBooks(3);
			const [featureData, recentData, othersData] = response;
			dispatch(setRecentBook(recentData));
			dispatch(setFeaturesBooks(featureData));
			dispatch(setOtherBook(othersData));
		};
		if(books.recentsBook.length <= 0 && books.featuresBook.length <= 0 && books.otherBooks.length <= 0) 
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
					{books.recentsBook.length > 0 && books.featuresBook.length > 0 && books.otherBooks.length > 0 ? (
						<>
							{Swal.close()}
							<Outstanding/>
							<Recent />
							<Others/>
						</>
					) : (
						<Loading />
					)}
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
