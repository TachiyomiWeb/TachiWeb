import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HistoryItem {
	title: string | null;
	subtitle: string | null;
	item: number;
	children: number | null;
	selectedExtension: string | null;
}

export interface NavigationState {
	history: HistoryItem[];
	item: number;
	children: number | null;
	title: string | null;
	subtitle: string | null;
	selectedExtension: string | null;
}

const slice = createSlice({
	name: 'Navigation',
	initialState: <NavigationState>{
		history: [],
		item: 0,
		children: null,
		title: 'label_library',
		subtitle: null,
		selectedExtension: null,
	},
	reducers: {
		setItem: (state, action: PayloadAction<number>) => {
			state.item = action.payload;
			state.children = null;
			state.history.push({
				title: state.title,
				subtitle: state.subtitle,
				item: action.payload,
				children: null,
				selectedExtension: null,
			});
		},
		setChildrenItem: (state, action: PayloadAction<number | null>) => {
			state.children = action.payload;
			state.history.push({
				title: state.title,
				subtitle: state.subtitle,
				item: state.item,
				children: action.payload,
				selectedExtension: null,
			});
		},
		selectExtension: (state, action: PayloadAction<string | null>) => {
			state.selectedExtension = action.payload;
			state.history.push({
				title: state.title,
				subtitle: state.subtitle,
				item: state.item,
				children: state.children,
				selectedExtension: action.payload,
			});
		},
		setTitle: (state, action: PayloadAction<string | null>) => {
			state.title = action.payload;
		},
		turnBack: (state, _) => {
			const previous = state.history[state.history.length - 2] ?? {
				item: 0,
				children: null,
				title: 'label_library',
				subtitle: null,
				selectedExtension: null,
			};

			if (previous !== undefined) {
				state.title = previous.title;
				state.subtitle = previous.subtitle;
				state.item = previous.item;
				state.children = previous.children;
				state.selectedExtension = previous.selectedExtension;
				state.history = state.history.slice(0, -1);
			}
		},
	},
});

export const { setItem, setChildrenItem, setTitle, turnBack, selectExtension } = slice.actions;

export const reducer = slice.reducer;
