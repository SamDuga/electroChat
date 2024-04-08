import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../reducers/chatReducer';
import authReducer from '../reducers/authReducer';

export default function configStore() {
	const store = configureStore({
		reducer: {
			chats: chatReducer,
			auth: authReducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}),
	});

	return store;
}
