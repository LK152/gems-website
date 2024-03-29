import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {
	ThemeProvider,
	CssBaseline,
	createTheme,
	Box,
	responsiveFontSizes,
} from '@mui/material';
import createEmotionCache from 'utilities/createEmotionCache';
import lightThemeOptions from 'styles/lightThemeOptions';
import dynamic from 'next/dynamic';
import '@styles/styles.css';
import Contactbar from '@components/Contactbar';

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const Navbar = dynamic(() => import('@components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@components/Footer'), { ssr: false });
const clientSideEmotionCache = createEmotionCache();
const lightTheme = responsiveFontSizes(createTheme(lightThemeOptions));

const MyApp = (props: MyAppProps) => {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	return (
		<Box sx={{ minWidth: '100vw', minHeight: '100vh' }}>
			<CacheProvider value={emotionCache}>
				<Head>
					<title>GEMS Academy</title>
				</Head>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Navbar />
					<Component {...pageProps} />
					<Contactbar />
					<Footer />
				</ThemeProvider>
			</CacheProvider>
		</Box>
	);
};

export default MyApp;
