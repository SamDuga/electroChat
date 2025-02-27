import React from 'react';

function ChatUsers() {
	return (
		<div className='list-container'>
			<div className='chat-search-box'>
				<div className='input-group'>
					<input className='form-control' placeholder='Search' />
				</div>
			</div>
			<ul className='items'>
				<li onClick={() => {}} className='item'>
					<div className='item-status'>
						<img
							src='https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png'
							alt='Retail Admin'
						/>
						<span className='status online'></span>
					</div>
					<p className='name-time'>
						<span className='name mr-2'>Some User 1</span>
					</p>
				</li>
				<li onClick={() => {}} className='item'>
					<div className='item-status'>
						<img
							src='https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png'
							alt='Retail Admin'
						/>
						<span className='status online'></span>
					</div>
					<p className='name-time'>
						<span className='name mr-2'>Some User 2</span>
					</p>
				</li>
				<li onClick={() => {}} className='item'>
					<div className='item-status'>
						<img
							src='https://www.pinclipart.com/picdir/big/220-2207735_avatars-clipart-generic-user-woman-people-icon-png.png'
							alt='Retail Admin'
						/>
						<span className='status online'></span>
					</div>
					<p className='name-time'>
						<span className='name mr-2'>Some User 3</span>
					</p>
				</li>
				<li onClick={() => {}} className='item'>
					<div className='item-status'>
						<img
							src='https://www.pinclipart.com/picdir/big/220-2207735_avatars-clipart-generic-user-woman-people-icon-png.png'
							alt='Retail Admin'
						/>
						<span className='status online'></span>
					</div>
					<p className='name-time'>
						<span className='name mr-2'>Some User 4</span>
					</p>
				</li>
			</ul>
		</div>
	);
}

export default ChatUsers;
