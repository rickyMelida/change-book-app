import { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

export const useChat = (message, from, to) => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = true;
	const [messages, setMessages] = useState([]);
	const atTime = new Date();

	useEffect(() => {
		addDoc(collection(db, 'messages'), {
			from,
			to,
			message,
			atTime,
		});

		const unsubscribe = onSnapshot(
			collection(db, 'messages'),
			snapshot => {
				setLoading(false);
				setMessages(
					snapshot.docs.map(doc => ({
						...doc.data(),
						id: doc.id,
					}))
				);
			},
			err => {
				setError(err);
			}
		);

		return () => unsubscribe();
	}, [message]);

	return { error, loading, messages };
};
