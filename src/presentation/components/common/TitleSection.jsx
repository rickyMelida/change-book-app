import React from 'react';

export const TitleSection = ({name}) => {
	return (
		<>
			<div id='other'>
				<div className='row'>
					<div className='col-6 offset-0 col-md-3 offset-md-1 pt-2'>
						<h5 id='recientes'>{name}</h5>
					</div>
					<div className='row'>
						{/* <div className='col-4 offset-2 col-md-2 offset-md-6'>
							<span className='text-right view-all'>
								<a href='./views/unauthorized.html' className='text-dark h6'>
									ver todos &gt;
								</a>
							</span>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
};
