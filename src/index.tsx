import App from './App';
import store from './store';
import './style.css';
import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('App')!);

root.render(
	<StyledEngineProvider injectFirst>
		<Provider store={store}>
			<App />
		</Provider>
	</StyledEngineProvider>
);
