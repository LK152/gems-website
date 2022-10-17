import { drive_v3 } from 'googleapis';

export {};

declare global {
	type imageProps = {
		id: string;
		folderId: string;
		fileName: string;
		mimeType: string;
		path: string;
		size: number;
	};
    
	type navbarPathsProps = {
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
