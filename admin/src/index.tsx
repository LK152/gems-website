import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { CommonProvider } from './context/commonContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<CommonProvider>
				<CssBaseline />
				<Navbar />
				<Sidebar />
				<App />
			</CommonProvider>
		</BrowserRouter>
	</React.StrictMode>
);
