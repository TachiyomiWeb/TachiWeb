import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HistoryItem {
	item: number;
	children: number | null;
}

export interface NavigationState {
	history: HistoryItem[];
	item: number;
	children: number | null;
	title: string | null;
	subtitle: string | null;
}

const slice = createSlice({
	name: 'Navigation',
	initialState: <NavigationState>{
		history: [],
		item: 0,
		children: null,
		title: 'label_library',
		subtitle: null,
	},
	reducers: {
		setItem: (state, action: PayloadAction<number>) => {
			state.item = action.payload;
			state.children = null;
			state.history.push({ item: action.payload, children: null });
		},
		setChildrenItem: (state, action: PayloadAction<number | null>) => {
			state.children = action.payload;
			state.history.push({ item: state.item, children: action.payload });
		},
		setTitle: (state, action: PayloadAction<string | null>) => {
			state.title = action.payload;
		},
		turnBack: (state, _) => {
			const previous = state.history[state.history.length - 2] ?? {
				item: 0,
				children: null,
			};
			if (previous !== undefined) {
				state.item = previous.item;
				state.children = previous.children;
				state.history = state.history.slice(0, -1);
			}
		},
	},
});

export const { setItem, setChildrenItem, setTitle, turnBack } = slice.actions;

export const reducer = slice.reducer;
