import React, { useEffect, useRef, useState } from 'react';
import { avatar, send } from '../../../assets/images/images';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';
import { getUserInfo } from '../../../services/user.service';
import getCookie from '../../../hooks/getCookie';
import Swal from 'sweetalert2';

export const Message = () => {
	const hourFormat = date => `${date.getHours()}:${date.getMinutes()}`;
	const messageSection = useRef();

	const messageValue = useRef();
	const [message, setMessage] = useState([]);
	const user = getCookie('displayName').split(' ')[0];
	const [otherUser, setotherUser] = useState('');

	const fetchPostII = async () => {
		onSnapshot(collection(db, 'messages'), snapshot => {
			setMessage(
				snapshot.docs
					.map(doc => ({
						...doc.data(),
						id: doc.id,
					}))
					.sort((a, b) => a.date - b.date)
			);
		});
		Swal.close()
	};

	useEffect(() => {
		fetchPostII();
		getUserInfo('6PcAWK9sItaDBR3XCPE74k6FQdl1')
			.then(usr => {
				setotherUser(usr.displayName.split(' ')[0]);
			})
			.catch(err => {
				throw err;
			});
	}, []);

	useEffect(() => {
		messageSection.current?.scrollIntoView({ behavior: 'smooth' });
	}, [message]);

	const addMessage = async m => {
		try {
			await addDoc(collection(db, 'messages'), {
				from: user,
				to: 'Anahi',
				mensaje: m,
				date: new Date(),
			});
		} catch (e) {
			throw ('Error adding document: ', e);
		}
	};

	const sendMessage = e => {
		e.preventDefault();
		addMessage(messageValue.current.value);
		messageValue.current.value = '';
	};

	return (
		<div className='container'>
			<hr />
			<div className='row'>
				{/* <!--------------------  Contacts with writting  -------------------------------> */}
				<div className='col-md-2 middle bg-light'>
					{/* <!--------------------  Info User  ----------------------> */}
					<div className='row my-3'>
						<div className='col-md-2 icon-to'>
							<div className='avatar-sm'>
								<img
									src={avatar}
									alt='Avatar'
									title='Ricardo Melida'
									width='30'
									loading='lazy'
								/>
							</div>
						</div>
						<div className='col-md-10 to'>
							<strong className='d-block pt-3 mx-3'>Ricardo Melida</strong>
						</div>
					</div>
					<hr />

					{/* <!--------------------  Field Search  -------------------> */}
					<div className='row'>
						<div className='col-md-12'>
							<form>
								<div className='form-group form-search'>
									<input
										type='search'
										className='form-control'
										id='search-chat'
										placeholder='&#xF002; Buscar'
										style={{ fontFamily: 'Arial, FontAwesome' }}
									/>
								</div>
							</form>
						</div>
					</div>

					{/* <!--------------------  Contacts Chats  ------------------> */}
					<div className='row my-4 overflow-auto contacts-chats'>
						<div className='col-md-12'>
							{/* <!--------------------  Chat 1  ------------------> */}
							<div className='row'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2 icon-from'>
											<div className='avatar-sm'>
												<img
													src={avatar}
													title='Nelly Ruiz Diaz'
													alt='Avatar'
													width='30'
													loading='lazy'
												/>
											</div>
										</div>
										<div className='col-md-10 ml-2 from'>
											<strong className='d-block'>Anahi Encina</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>

							{/* <!--------------------  Chat 2  ------------------> */}
							<div className='row mt-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2 icon-from'>
											<div className='avatar-sm'>
												<img
													src={avatar}
													title='Nelly Ruiz Diaz'
													alt='Avatar'
													width='30'
													loading='lazy'
												/>
											</div>
										</div>
										<div className='col-md-10 ml-2 from'>
											<strong className='d-block'>Nelly Ruiz Diaz</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>

							{/* <!--------------------  Chat 3  ------------------> */}
							<div className='row mt-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2 icon-from'>
											<div className='avatar-sm'>
												<img
													src={avatar}
													alt='Avatar'
													title='Jose Franco'
													width='30'
													loading='lazy'
												/>
											</div>
										</div>
										<div className='col-md-10 from'>
											<strong className='d-block'>Jose Franco</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>

							{/* <!--------------------  Chat 4  ------------------> */}
							<div className='row mt-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2 icon-from'>
											<div className='avatar-sm'>
												<img
													src={avatar}
													alt='Avatar'
													title='Samuel Frutos'
													width='30'
													loading='lazy'
												/>
											</div>
										</div>
										<div className='col-md-10 ml-2 from'>
											<strong className='d-block'>Samuel Frutos</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>

							{/* <!--------------------  Chat 5  ------------------> */}
							<div className='row mt-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2 icon-from'>
											<div className='avatar-sm'>
												<img
													src={avatar}
													alt='Avatar'
													title='Eduardo Esquivel'
													width='30'
													loading='lazy'
												/>
											</div>
										</div>
										<div className='col-md-10 ml-2 from'>
											<strong className='d-block'>Eduardo Esquivel</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>

							{/* <!--------------------  Chat 6  ------------------> */}
							<div className='row mt-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2 icon-from'>
											<div className='avatar-sm'>
												<img
													src={avatar}
													alt='Avatar'
													title='Luis Cabrera'
													width='30'
													loading='lazy'
												/>
											</div>
										</div>
										<div className='col-md-10 ml-2 from'>
											<strong className='d-block'>Luis Cabrera</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--------------------  Chats  -------------------------------> */}
				<div className='col-md-9'>
					{/* <!--------------------  Info Contact User  ---------------> */}
					<div className='row align-items-center'>
						<div className='col-md-1 col-lg-1 '>
							<div className='avatar-sm name-chat'>
								<img src={avatar} alt='Avatar' width='30' loading='lazy'/>
							</div>
						</div>
						<div className='col-md-10 col-lg-10 chat-name'>
							<strong className='d-block pt-3'>Anahi Encina</strong>
						</div>
					</div>
					<hr />
					{/* <!--------------------  Chat  ----------------------------> */}
					<div className='row'>
						<div className='col-md-12 m-2 overflow-auto messages'>
							<p className='m-2'>
								{message.map((element, index) => (
									<p
										className={
											user === element.from
												? 'bubble-chat chat-me'
												: 'bubble-chat chat-other'
										}
										key={index}
									>
										{element.mensaje}
										<cite className='d-block'>
											{user === element.from ? user : otherUser}{' '}
											{hourFormat(element.date.toDate())}
										</cite>
									</p>
								))}
							</p>
							<div ref={messageSection} />
						</div>
					</div>
					<hr />
					<div className='row'>
						<div className='col-md-12'>
							<div className='row'>
								<div className='col-md-12'>
									<div className='container'>
										<form className='form-message' onSubmit={sendMessage}>
											<div className='form-group'>
												<input
													type='text'
													className='form-control'
													id='exampleFormControlTextarea1'
													rows='1'
													ref={messageValue}
												/>
											</div>
											<button type='submit' className='btn btn-primary'>
												<img src={send} alt='Send' width='25' title='Enviar' loading='lazy'/>
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
