import React, { useEffect, useState } from 'react';
import { Card } from '../common/Card';
import { getUserBooks } from '../../../services/books.service';

export const UserBooks = ({ userUid }) => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fecthBooks = async () => {
			const result = await getUserBooks(userUid);
			setBooks(result);
		};

		fecthBooks();
	}, []);

	return (
		<>
			<div className='container'>
				<div className='row'>
					{books.length > 0 ? (
						books.map(element => (
							<div
								className='col-10 offset-2 col-sm-9 offset-sm-3 col-md-5 offset-md-1 col-xl-3 offset-xl-0 py-3'
								key={element.userId}
							>
								<Card bookData={element} />
							</div>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};
