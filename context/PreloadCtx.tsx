import axios from 'axios';
import { ScriptProps } from 'next/script';
import React, { createContext, useContext, useEffect, useState } from 'react';

const preloadCtxDefaultValues: preloadCtxType = {
	navbarLinks: [],
	imageArray: [],
};

const preloadCtx = createContext(preloadCtxDefaultValues);

const usePreloadCtx = () => {
	return useContext(preloadCtx);
};

const navbarLinks = [
	{ title: 'SAT', path: '/sat' },
	{ title: 'AP', path: '/ap' },
	{ title: 'TOEFL', path: '/toefl' },
	{ title: 'Extra Curricular', path: '/extra-curricular' },
	{ title: 'College Mentoring', path: '/college-mentoring' },
];

export const PreloadCtxProvider = (props: ScriptProps) => {
	const [imageArray, setImageArray] = useState<string[]>([]);

	useEffect(() => {
		axios.get('/api/home/slider').then((res) => {
			setImageArray(res.data);
		});
	}, []);

	const value = { navbarLinks, imageArray };

	return <preloadCtx.Provider value={value} {...props} />;
};

export default usePreloadCtx;
