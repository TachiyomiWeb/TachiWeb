import { createSlice } from '@reduxjs/toolkit';
import { Themes } from '../../services/theme/colors';

export interface SettingsState {
	downloaded_only: boolean;
	incognito: boolean;
	theme: Themes;
	dark: boolean;
	amoled: boolean;
}

const slice = createSlice({
	name: 'Settings',
	initialState: <SettingsState>{
		downloaded_only: false,
		incognito: false,
		theme: 'midnightdusk',
		dark: true,
		amoled: false,
	},
	reducers: {
		changeSettings: (state, action) => {
			state[action.payload.key] = action.payload.value;
		},
	},
});

export const { changeSettings } = slice.actions;

export const reducer = slice.reducer;
