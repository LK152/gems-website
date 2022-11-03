export = {};

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

	enum imageActionType {
		slider = 'slider',
		gallery = 'gallery',
	}

	interface imageAction {
		type: imageActionType;
		payload: imageProps[] | null;
	}

	interface imageState {
		slider: imageProps[] | null;
		gallery: imageProps[] | null;
	}
}
