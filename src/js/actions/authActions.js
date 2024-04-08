import * as api from '../api/authApi';

export const registerUser = (formData) => (dispatch) => {
	dispatch({ type: 'AUTH_REGISTRATION_INIT' });
	return api
		.registerUser(formData)
		.then((_) => dispatch({ type: 'AUTH_REGISTRATION_SUCCESS' }))
		.catch((error) => dispatch({ type: 'AUTH_REGISTRATION_ERROR', error }));
};

export const loginUser = (formData) => (dispatch) => {
	dispatch({ type: 'AUTH_LOGIN_INIT' });
	return api
		.loginUser(formData)
		.then((_) => dispatch({ type: 'AUTH_LOGIN_SUCCESS' }))
		.catch((error) => {
			dispatch({ type: 'AUTH_LOGIN_ERROR', error });
		});
};

export const logoutUser = () => (dispatch) => api.logoutUser().then((_) => dispatch({ type: 'AUTH_LOGOUT_SUCCESS' }));

export const listenToAuthChange = () => (dispatch) => {
	dispatch({ type: 'AUTH_ON_INIT' });
	api.onAuthStateChange(async (authUser) => {
		if (authUser) {
			const userProfile = await api.retrieveUserProfile(authUser.uid);
			dispatch({ type: 'AUTH_ON_SUCCESS', user: userProfile });
		} else {
			dispatch({ type: 'AUTH_ON_ERROR' });
		}
	});
};
