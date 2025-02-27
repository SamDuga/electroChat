import * as api from '../api/chatApi';

export function fetchChats() {
	return async function (dispatch) {
		const chats = await api.fetchChats();
		dispatch({
			type: 'CHATS_FETCH_SUCCESS',
			chats,
		});

		return chats;
	};
}
