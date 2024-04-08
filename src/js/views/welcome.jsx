import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from '../components/loginForm';
import RegisterForm from '../components/registerForm';
import Loading from '../components/shared/loading';

function Welcome() {
	const [isLoginView, setIsLogin] = useState(true);
	const user = useSelector(({ auth }) => auth.user);
	const isChecking = useSelector(({ auth }) => auth.isChecking);

	if (isChecking) {
		return <Loading />;
	}

	if (user) {
		return <Navigate to='/home' />;
	}

	return (
		<div className='centered-view'>
			<div className='centered-container'>
				{isLoginView ? <LoginForm /> : <RegisterForm />}
				<small className='form-text text-muted mt-2'>
					{isLoginView ? 'Not registered yet?' : 'Already Registered?'}
					<span onClick={() => setIsLogin(!isLoginView)} className='btn-link ms-2'>
						{isLoginView ? 'Register' : 'Login'}
					</span>
				</small>
			</div>
		</div>
	);
}

export default Welcome;
