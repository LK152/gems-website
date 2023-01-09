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

	type sidebarElProps = {
		title: string;
		pointer: string;
	};
}
