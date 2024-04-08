import React from 'react';
import ChatSearch from './chatSearch';
import { useNavigate } from 'react-router-dom';

function JoinedChats(props) {
	const navigate = useNavigate();

	return (
		<div className='list-container'>
			<ChatSearch />
			<ul className='items'>
				{props.chats &&
					props.chats.map((chat) => (
						<li key={chat.id} onClick={() => navigate(`/chat/${chat.id}`)} className='item'>
							<div className='item-status'>
								<img src={chat.image} alt='Retail Admin' />
								<span className='status online'></span>
							</div>
							<p className='name-time'>
								<span className='name me-2'>{chat.name}</span>
							</p>
						</li>
					))}
			</ul>
		</div>
	);
}

export default JoinedChats;
