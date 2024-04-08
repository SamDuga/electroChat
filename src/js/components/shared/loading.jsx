import React from 'react';

import './spinner.scss';

function Loading(props) {
	return (
		<div className='loading-screen '>
			<div className='loading-view'>
				<div className='loading-view-container'>
					<div className='mb-3'>{props.message || 'Loading, just a moment...'}</div>
					<div className='sk-chase'>
						<div className='sk-chase-dot'></div>
						<div className='sk-chase-dot'></div>
						<div className='sk-chase-dot'></div>
						<div className='sk-chase-dot'></div>
						<div className='sk-chase-dot'></div>
						<div className='sk-chase-dot'></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Loading;
