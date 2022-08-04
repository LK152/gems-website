import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme, Box } from '@mui/material';
import createEmotionCache from 'utilities/createEmotionCache';
import lightThemeOptions from 'styles/lightThemeOptions';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from 'components/Navbar';

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const lightTheme = createTheme(lightThemeOptions);

const MyApp = (props: MyAppProps) => {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	return (
		<Box sx={{ minWidth: '100vw', minHeight: '100vh'}}>
			<CacheProvider value={emotionCache}>
				<Head>
					<title>GEMS Academy</title>
				</Head>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Navbar />
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</Box>
	);
};

export default MyApp;
