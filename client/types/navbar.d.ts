declare module 'navbarTypes' {
	type navbarSubItems = {
		title: string;
		path: string;
	};

	type navbarPathsProps = {
		title: string;
		subItems: navbarSubItems[];
	};

	type dropdownProps = {
		title: string;
		subItems: navbarSubItems[];
	};
}
