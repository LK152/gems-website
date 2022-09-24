import { drive_v3 } from 'googleapis';

export {};

declare global {
    type idArrayProp = {
        ids: string[];
    }

    type idProp = {
        id: string;
    }

	type navbarCtxProps = {
		title: string;
		subItems: navbarSubItems[];
	};

	type navbarSubItems = {
		title: string;
		path: string;
	};

	type dropdownProps = {
		title: string;
		subItems: navbarLinkProps[];
	};

	type preloadCtxType = {
		navbarCtx: navbarCtxProps[];
	};
}
