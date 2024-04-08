import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import db from '../db/firestore';

async function createUserProfile(userProfile) {
	db.collection('userProfiles').doc(userProfile.uid).set(userProfile);
}

export async function registerUser({ email, password, username, avatar }) {
	try {
		const auth = getAuth();
		const { user } = await createUserWithEmailAndPassword(auth, email, password);
		await createUserProfile({ uid: user.uid, username, email: user.email, avatar, joinedChats: [] });
	} catch (error) {
		return Promise.reject(error.message);
	}
}

export async function retrieveUserProfile(userId) {
	const snapshot = await db.collection('userProfiles').doc(userId).get();
	return { ...snapshot.data() };
}

export function loginUser({ email, password }) {
	try {
		const auth = getAuth();
		return signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		return Promise.reject(error.message);
	}
}

export function logoutUser() {
	const auth = getAuth();
	return auth.signOut();
}

export function onAuthStateChange(onAuth) {
	const auth = getAuth();
	return auth.onAuthStateChanged(onAuth);
}
