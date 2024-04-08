import db from '../db/firestore';

const extractSnapshotData = (snapshot) => {
	const items = [];
	snapshot.docs.forEach((chat) => {
		items.push({ id: chat.id, ...chat.data() });
	});

	return items;
};

export async function fetchChats() {
	return await db.collection('chats').get().then(extractSnapshotData);
}
