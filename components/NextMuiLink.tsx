import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const Anchor = styled('a')({});

type NextLinkComposedProps = {
	to: NextLinkProps['href'];
	linkAs?: NextLinkProps['as'];
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
	Omit<NextLinkProps, 'href' | 'as'>;

export const NextLinkComposed = React.forwardRef<
	HTMLAnchorElement,
	NextLinkComposedProps
>(function NextLinkComposed(props, ref) {
	const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } =
		props;

	return (
		<NextLink
			href={to}
			prefetch={prefetch}
			as={linkAs}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			passHref
			locale={locale}
		>
			<Anchor ref={ref} {...other} />
		</NextLink>
	);
});

export type LinkProps = {
	activeClassName?: string;
	as?: NextLinkProps['as'];
	href: NextLinkProps['href'];
	linkAs?: NextLinkProps['as'];
	noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
	Omit<MuiLinkProps, 'href'>;

const NextMuiLink = React.forwardRef<HTMLAnchorElement, LinkProps>(function NextMuiLink(
	props,
	ref
) {
	const {
		activeClassName = 'active',
		as,
		className: classNameProps,
		href,
		linkAs: linkAsProp,
		locale,
		noLinkStyle,
		prefetch,
		replace,
		role, // Link don't have roles.
		scroll,
		shallow,
		...other
	} = props;

	const router = useRouter();
	const pathname = typeof href === 'string' ? href : href.pathname;
	const className = clsx(classNameProps, {
		[activeClassName]: router.pathname === pathname && activeClassName,
	});
	const isExternal =
		typeof href === 'string' &&
		(href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

	if (isExternal) {
		if (noLinkStyle) {
			return (
				<Anchor
					className={className}
					href={href}
					ref={ref}
					{...other}
				/>
			);
		}

		return (
			<MuiLink className={className} href={href} ref={ref} {...other} />
		);
	}

	const linkAs = linkAsProp || as;
	const nextjsProps = {
		to: href,
		linkAs,
		replace,
		scroll,
		shallow,
		prefetch,
		locale,
	};

	if (noLinkStyle) {
		return (
			<NextLinkComposed
				className={className}
				ref={ref}
				{...nextjsProps}
				{...other}
			/>
		);
	}

	return (
		<MuiLink
			component={NextLinkComposed}
			className={className}
			ref={ref}
			{...nextjsProps}
			{...other}
		/>
	);
});

export default NextMuiLink;
