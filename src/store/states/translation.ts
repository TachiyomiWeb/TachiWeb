import { createSlice } from '@reduxjs/toolkit';

export interface TranslationState {
	string: Record<string, string>;
	currentLanguage: string;
}

const slice = createSlice({
	name: 'Translation',
	initialState: <TranslationState>{ string: {}, currentLanguage: 'unknown' },
	reducers: {
		setTranslation: (state, action) => {
			state.string = action.payload.values;
			state.currentLanguage = action.payload.language;
		},
		deleteTranslation: (state) => {
			state.string = {};
			state.currentLanguage = 'unknown';
		},
	},
});

export const { setTranslation, deleteTranslation } = slice.actions;

export const reducer = slice.reducer;
