import React, { createContext, useContext } from 'react';

const sidebarProps = {
	pages: [
		{
			id: 'about',
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
			id: 'subjects',
			title: 'Subjects',
			subItems: [
				{ title: 'English', path: '/english' },
				{ title: 'Science', path: '/science' },
				{ title: 'Math', path: '/math' },
			],
		},
		{
			id: 'standardizedTest',
			title: 'Standardized Tests',
			subItems: [
				{ title: 'SAT', path: '/sat' },
				{ title: 'TOEFL', path: '/toefl' },
				{ title: 'APs', path: '/aps' },
			],
		},
		{
			id: 'extraCurriculums',
			title: 'Extra Curriculums',
			subItems: [
				{ title: 'IGEM', path: '/igem' },
				{ title: 'The Earth Prize', path: '/the-earth-prize' },
				{ title: 'AI For Good', path: '/ai-for-good' },
				{ title: 'Podcast Club', path: '/podcast-club' },
				{ title: 'Policy Debate', path: '/policy-debate' },
			],
		},
	],
};

const drawerWidth = '260px';

const commonContext = createContext<commonContextType>({} as commonContextType);

const useCommonContext = () => {
	return useContext(commonContext);
};

export const CommonProvider = (props: contextProps) => {
	const value = {
		sidebarProps,
		drawerWidth,
	};

	return <commonContext.Provider value={value} {...props} />;
};

export default useCommonContext;
