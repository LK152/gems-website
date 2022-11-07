export enum folderIds {
	homeSlider = 'homeSlider',
	homeGallery = 'homeGallery',
}

declare global {
	type imageProps = {
		id: string;
		folderId?: string;
		fileName?: string;
		mimeType?: string;
		path: string;
		size?: number;
		order: number;
	};

	type contextProps = {
		children: React.ReactNode;
	};

	interface commonContextType {
		sidebarProps: sideBar;
		drawerWidth: string;
	}

	type sideBar = {
		pages: page[];
	};

	type page = {
		id: string;
		title: string;
		subItems: subPages[];
	};

	type subPages = {
		title: string;
		path: string;
	};
}
