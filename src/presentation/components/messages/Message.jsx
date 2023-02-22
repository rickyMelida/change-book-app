import React from 'react';
import { avatar } from '../../../assets/images/images';

export const Message = () => {
	return (
		<div className='container'>
			<hr />
			<div className='row'>
				{/* <!--------------------  Contacts with writting  -------------------------------> */}
				<div className='col-md-3 middle bg-light'>
					{/* <!--------------------  Info User  ----------------------> */}
					<div className='row my-3'>
						<div className='col-md-2'>
							<div className='avatar-sm'>
								<img src={avatar} alt='Avatar' width='30' />
							</div>
						</div>
						<div className='col-md-10 ml-2'>
							<strong className='d-block pt-3'>Ricardo Melida</strong>
						</div>
					</div>

					{/* <!--------------------  Field Search  -------------------> */}
					<div className='row'>
						<div className='col-md-12'>
							<form>
								<div className='form-group'>
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
					<div className='row my-4'>
						<div className='col-md-12'>
							{/* <!--------------------  Chat 1  ------------------> */}
							<div className='row my-4'>
								<div className='col-md-12'>
									<div className='row p-2'>
										<div className='col-md-2'>
											<div className='avatar-sm'>
												<img src={avatar} alt='Avatar' width='30' />
											</div>
										</div>
										<div className='col-md-10 ml-2'>
											<strong className='d-block'>Anahi Encina</strong>
											<span>Lorem ipsum dolor</span>
											<span className='badge badge-light'>4</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!--------------------  End Chat 1 ---------------> */}

							{/* <!--------------------  Chat 2  ------------------> */}
							<div className='row my-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2'>
											<div className='avatar-sm'>
												<img src={avatar} alt='Avatar' width='30' />
											</div>
										</div>
										<div className='col-md-10 ml-2'>
											<strong className='d-block'>Nelly Ruiz Diaz</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!--------------------  End Chat 2 ---------------> */}

							{/* <!--------------------  Chat 3  ------------------> */}
							<div className='row my-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2'>
											<div className='avatar-sm'>
												<img src={avatar} alt='Avatar' width='30' />
											</div>
										</div>
										<div className='col-md-10 ml-2'>
											<strong className='d-block'>Jose Franco</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!--------------------  End Chat 3 ---------------> */}

							{/* <!--------------------  Chat 4  ------------------> */}
							<div className='row my-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2'>
											<div className='avatar-sm'>
												<img src={avatar} alt='Avatar' width='30' />
											</div>
										</div>
										<div className='col-md-10 ml-2'>
											<strong className='d-block'>Samuel Frutos</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!--------------------  End Chat 4 ---------------> */}

							{/* <!--------------------  Chat 5  ------------------> */}
							<div className='row my-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2'>
											<div className='avatar-sm'>
												<img src={avatar} alt='Avatar' width='30' />
											</div>
										</div>
										<div className='col-md-10 ml-2'>
											<strong className='d-block'>Eduardo Esquivel</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!--------------------  End Chat 5 ----------------> */}

							{/* <!--------------------  Chat 6  ------------------> */}
							<div className='row my-4'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-2'>
											<div className='avatar-sm'>
												<img src={avatar} alt='Avatar' width='30' />
											</div>
										</div>
										<div className='col-md-10 ml-2'>
											<strong className='d-block'>Luis Cabrera</strong>
											<span>Lorem ipsum dolor</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!--------------------  End Chat 6 -----------------> */}
						</div>
					</div>
				</div>

				{/* <!--------------------  Chats  -------------------------------> */}
				<div className='col-md-9'>
					{/* <!--------------------  Info Contact User  ---------------> */}
					<div className='row my-3'>
						<div className='col-md-1'>
							<div className='avatar-sm name-chat'>
								<img src={avatar} alt='Avatar' width='30' />
							</div>
						</div>
						<div className='col-md-10 mr-3'>
							<strong className='d-block pt-3'>Anahi Encina</strong>
						</div>
					</div>
					<hr />
					{/* <!--------------------  Chat  ----------------------------> */}
					<div className='row'>
						<div className='col-md-12 m-2'>
							<p className='m-2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate aliquid, quis maiores temporibus quia nam sint minus
								ea soluta atque ad earum molestias pariatur, consectetur dicta
								molestiae! Laboriosam, nulla sapiente! Impedit maxime enim quasi
								maiores vero est? Assumenda dicta rem facere provident esse! A
								distinctio, assumenda delectus vel neque vero illo laborum
								totam, magnam nostrum consequatur, voluptatibus repellendus quo
								cumque. Ipsam aliquam labore autem maxime, totam corrupti iure
								tempora incidunt reiciendis non vel harum fugiat natus earum
								quos ullam voluptatum suscipit tempore dolores ipsa! Enim
								corrupti dolor voluptatem suscipit reprehenderit! Odit id
								explicabo odio quo fugit. Voluptates optio voluptatem dicta ipsa
								obcaecati quibusdam odio, nostrum beatae molestias aut facere
								cum quae voluptatum. Blanditiis odit officia in commodi nobis
								modi eius? Soluta neque reiciendis praesentium recusandae nisi
								temporibus asperiores porro expedita odit animi numquam incidunt
								debitis eos cumque, omnis voluptate eaque nemo similique! Quis
								rerum aliquid, inventore veniam possimus labore sint.
								Voluptatibus pariatur doloremque aspernatur quia qui repudiandae
								placeat libero hic sequi repellat beatae recusandae voluptate
								enim in, eius obcaecati rerum quisquam quaerat. Saepe quo
								dolorum, enim numquam quasi aspernatur veritatis. Distinctio
								fugit ullam ducimus nisi, commodi aut libero qui quas, sed
								quisquam hic rerum perferendis quae aperiam! Eaque, perferendis
								quibusdam similique ipsam tempore, eos ut asperiores deleniti
								quasi necessitatibus quae? Laborum assumenda nesciunt reiciendis
								debitis impedit sequi labore possimus deleniti esse, enim earum
								saepe nulla necessitatibus obcaecati perferendis, quis eveniet,
								error maxime non dolor a voluptatibus cupiditate minus. Magnam,
								nesciunt. Vel et voluptatem veniam officia tenetur quasi sequi
								aliquam, minima laudantium, eos pariatur totam repellat nemo
								natus ut excepturi cumque? Consequatur laborum obcaecati vero
								architecto tenetur repudiandae, quae nulla cumque?
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<div className='row'>
								<div className='col-md-12'>
									<div className='container'>
										<form>
											<div className='form-group'>
												<input
													type='text'
													className='form-control'
													id='exampleFormControlTextarea1'
													rows='1'
													autoComplete='off'
												/>
											</div>
											<button type='submit' className='btn btn-primary my-2'>
												Enviar
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
