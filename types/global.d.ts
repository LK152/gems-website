export {};

declare global {
	type navbarLinkProps = {
		title: string;
		path: string;
	}

    interface preloadCtxInterface {
        navbarLinks: navbarLinkProps;
        imageArray: string[];
    }
}
