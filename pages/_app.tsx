import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
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
        <div style={{backgroundColor: 'black', height: '100vh', width: '100vw'}}>
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<Navbar />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
        </div>
	);
};

export default MyApp;
