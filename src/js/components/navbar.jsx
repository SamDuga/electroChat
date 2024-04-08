import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, Navigate } from 'react-router-dom';

import { logoutUser } from '../actions/authActions';

function Navbar() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(({ auth }) => auth.user);

	return (
		<div className='chat-navbar'>
			<nav className='chat-navbar-inner'>
				<div className='chat-navbar-inner-left'>
					<button onClick={() => navigate(-1)} className='btn btn-outline-primary ms-2'>
						Back
					</button>
					<Link to='/settings' className='btn btn-outline-success ms-2'>
						Settings
					</Link>
				</div>
				{user && (
					<>
						<div className='chat-navbar-inner-right'>
							<img className='avatar' src={user.avatar} alt='users avatar picture'></img>
							<span className='logged-in-user'>Hello, {user.username}!</span>
							<button onClick={() => dispatch(logoutUser())} className='btn btn-sm btn-outline-danger ms-2'>
								Logout
							</button>
						</div>
					</>
				)}
			</nav>
		</div>
	);
}

export default Navbar;
