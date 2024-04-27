import React, { useEffect, useState } from 'react';
import { avatar } from '../../../assets/images/images';
import { getUserInfo } from '../../../services/user.service';
import { useSelector } from 'react-redux';

export const UserProfile = () => {
	const [userInfo, setUserInfo] = useState({});
	const {uid} = useSelector(state =>  state.auth);

	useEffect(() => {
		const fecthUserInfo = async () => {
			const { displayName, photoURL } = await getUserInfo(uid);
			setUserInfo({ displayName, photoURL });
		};

		fecthUserInfo();
	}, []);

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='row my-5'>
						<div className='col-md-6 offset-3'>
							<div className='avatar'>
								<img
									src={userInfo.photoURL ? userInfo.photoURL : avatar}
									alt='Avatar'
									width='80'
									style={{borderRadius: '50%'}}
									loading='lazy'
								/>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6 offset-md-3 text-center'>
							<h3>{userInfo.displayName}</h3>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<hr />
						</div>
					</div>
				</div>

				<div className='row my-5 bg-light p-5' id='my-books'>
					<div className='m-2'>
						<div className='row justify-content-md-center'>
							<div className='col-3 offset-4 pb-3 mx-auto'>
								<h2>
									{userInfo.displayName ? (
										<span>
											{' '}
											Libros de
											<strong> {userInfo.displayName.split(' ')[0]}</strong>
										</span>
									) : (
										<span>
											{' '}
											Libros del <strong>Usuario</strong>
										</span>
									)}
								</h2>
							</div>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</>
	);
};
