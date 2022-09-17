export {};

declare global {
	type navbarLinkProps = {
		title: string;
		path: string;
	}

    type sliderItemProps = {
        id: string;
    }

    type preloadCtxType = {
        navbarLinks: navbarLinkProps[];
        imageArray: string[];
    }

    type driveFileMetadataType = {
        id: string;
    }
}
