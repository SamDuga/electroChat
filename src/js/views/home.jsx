import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import JoinedChats from '../components/joinedChats';
import AvailableChats from '../components/availableChats';
import ViewTitle from '../components/shared/viewTitle';
import { fetchChats } from '../actions/chatActions';

function Home() {
	const dispatch = useDispatch();
	let chats = useSelector((state) => state.chats.items);

	useEffect(() => {
		dispatch(fetchChats());
	}, [dispatch]);

	return (
		<div className='row no-gutters fh'>
			<div className='col-3 fh'>
				<JoinedChats chats={chats} />
			</div>
			<div className='col-9 fh'>
				<ViewTitle />
				<div className='container-fluid'>
					<AvailableChats chats={chats} />
				</div>
			</div>
		</div>
	);
}

export default Home;
