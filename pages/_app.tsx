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
import '@fontsource/nunito-sans';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import dynamic from 'next/dynamic';

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const lightTheme = responsiveFontSizes(createTheme(lightThemeOptions));

const PreloadCtxProvider = dynamic(
	() =>
		import('@context/PreloadCtx').then(
			(module) => module.PreloadCtxProvider
		),
	{ ssr: false }
);

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
					<PreloadCtxProvider>
						<CssBaseline />
						<Navbar />
						<Component {...pageProps} />
                        <Footer />
					</PreloadCtxProvider>
				</ThemeProvider>
			</CacheProvider>
		</Box>
	);
};

export default MyApp;
