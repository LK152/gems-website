export {};

declare global {
	type navbarCtxProps = {
		title: string;
		subItems: navbarSubItems[];
	}

    type navbarSubItems = {
        title: string;
        path: string;
    }

    type sliderItemProps = {
        id: string;
    }

    type dropdownProps = {
        title: string;
        subItems: navbarLinkProps[];
    }

    type preloadCtxType = {
        navbarCtx: navbarCtxProps[];
        imageArray: string[];
    }

    type driveFileMetadataType = {
        id: string;
    }
}
