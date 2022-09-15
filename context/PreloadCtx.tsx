import axios from 'axios';
import { AppProps } from 'next/app';
import { createContext, useContext, useEffect, useState } from 'react';

const preloadCtx = createContext<preloadCtxInterface | null>(null);

const usePreloadCtx = () => {
	return useContext(preloadCtx);
};

const navbarLinks: navbarLinkProps[] = [
	{ title: 'SAT', path: '/sat' },
	{ title: 'AP', path: '/ap' },
	{ title: 'TOEFL', path: '/toefl' },
	{ title: 'Extra Curricular', path: '/extra-curricular' },
	{ title: 'College Mentoring', path: '/college-mentoring' },
];

export const PreloadCtxProvider = (props: AppProps) => {
	const [imageArray, setImageArray] = useState([]);

	useEffect(() => {
		axios.get('/api/drive').then((res) => {
			setImageArray(res.data);
		});
	}, []);

	const value = { navbarLinks, imageArray };

    return <preloadCtx.Provider value={value} {...props} />
};

export default usePreloadCtx;