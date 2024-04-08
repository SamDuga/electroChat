import React from 'react';
import { useParams } from 'react-router-dom';

import ChatUsers from '../components/chatUsers';
import ViewTitle from '../components/shared/viewTitle';
import ChatMessages from '../components/chatMessages';

function Chat() {
	const { id } = useParams();

	return (
		<div className='row no-gutters fh'>
			<div className='col-3 fh'>
				<ChatUsers />
			</div>
			<div className='col-9 fh'>
				<ViewTitle text={`Joined channel: ${id}`} />
				<ChatMessages />
			</div>
		</div>
	);
}

export default Chat;
