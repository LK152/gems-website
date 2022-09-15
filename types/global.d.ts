export {};

declare global {
	type navbarLinkProps = {
		title: string;
		path: string;
	}

    type preloadCtxType = {
        navbarLinks: navbarLinkProps[];
        imageArray: string[];
    }
}
