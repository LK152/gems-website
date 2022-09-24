import { ScriptProps } from 'next/script';
import React, { createContext, useContext, useEffect, useState } from 'react';

const preloadCtxDefaultValues: preloadCtxType = {
	navbarCtx: [],
};

const preloadCtx = createContext(preloadCtxDefaultValues);

const usePreloadCtx = () => {
	return useContext(preloadCtx);
};

const navbarCtx: navbarCtxProps[] = [
	{
		title: 'About',
		subItems: [
			{ title: 'Contact Us', path: '/contact-us' },
			{ title: 'Teacher Introduction', path: '/teacher-intro' },
			{ title: 'Press Room', path: '/press-room' },
			{ title: 'Awards', path: '/awards' },
			{ title: 'Career', path: '/career' },
		],
	},
	{
		title: 'Subjects',
		subItems: [
			{ title: 'English', path: '/english' },
			{ title: 'Science', path: '/science' },
			{ title: 'Math', path: '/math' },
		],
	},
	{
		title: 'Standardized Tests',
		subItems: [
			{ title: 'SAT', path: '/sat' },
			{ title: 'TOEFL', path: '/toefl' },
			{ title: 'APs', path: '/aps' },
		],
	},
	{
		title: 'Extra Curriculums',
		subItems: [
			{ title: 'IGEM', path: '/igem' },
			{ title: 'The Earth Prize', path: '/the-earth-prize' },
			{ title: 'AI For Good', path: '/ai-for-good' },
			{ title: 'Podcast Club', path: '/podcast-club' },
			{ title: 'Policy Debate', path: '/policy-debate' },
		],
	},
];

export const PreloadCtxProvider = (props: ScriptProps) => {
	const value = { navbarCtx };

	return <preloadCtx.Provider value={value} {...props} />;
};

export default usePreloadCtx;
