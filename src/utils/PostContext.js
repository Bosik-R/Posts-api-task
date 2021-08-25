import { createContext } from 'react';

export const PostContext = createContext(null);

export const postDataContext = {
	id: null,
	title: null,
	body: null,
};
