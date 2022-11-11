import React from 'react';

export const FieldSearch = () => {
	return (
		<>
			<div className='row'>
				<div className='col-md-12'>
					<form>
						<div className='form-group'>
							<input
								type='search'
								className='form-control'
								id='search-chat'
								placeholder='&#xF002; Buscar'
								style='font-family:Arial, FontAwesome'
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
