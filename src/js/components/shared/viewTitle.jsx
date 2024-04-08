import React from 'react';

function ViewTitle(props) {
	return (
		<div className='chat-name-container'>
			<span className='name'>{props.text ? props.text : 'Choose your channel'}</span>
		</div>
	);
}

export default ViewTitle;
