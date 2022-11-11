import React from 'react';
import { Chat } from './Chat';
import { UserInfo } from './UserInfo';
import { FieldSearch } from './FieldSearch';

export const Message = () => {
	return (
		<div className='container'>
			<hr />
			<div className='row'>
				<div className='col-md-3 middle bg-light'>
					<UserInfo />
					<FieldSearch />
					<div className='row my-4'>
						<div className='col-md-12'>
							<Chat />
							<Chat />
							<Chat />
							<Chat />
							<Chat />
							<Chat />
						</div>
					</div>
				</div>

                <div className="col-md9">
                    <div className="row my-3">
                        <UserInfo />
                        <hr />
                    </div>
                </div>
			</div>
		</div>
	);
};
