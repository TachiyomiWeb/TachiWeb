import * as library from './states/library';
import * as navigation from './states/navigation';
import * as settings from './states/settings';
import * as translation from './states/translation';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		translation: translation.reducer,
		settings: settings.reducer,
		navigation: navigation.reducer,
		library: library.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
