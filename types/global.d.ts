import { drive_v3 } from 'googleapis';

export {};

declare global {
	type navbarCtxProps = {
		title: string;
		subItems: navbarSubItems[];
	};

	type navbarSubItems = {
		title: string;
		path: string;
	};

	type sliderItemProps = {
		id: string;
	};

	type dropdownProps = {
		title: string;
		subItems: navbarLinkProps[];
	};

	type preloadCtxType = {
		navbarCtx: navbarCtxProps[];
		imageArray: string[];
	};
}
