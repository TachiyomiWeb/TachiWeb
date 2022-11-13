import { createSlice } from '@reduxjs/toolkit';

export interface NavigationState {
  item: number;
  childrenItem: number | null;
  title: string;
}

const slice = createSlice({
  name: 'Navigation',
  initialState: <NavigationState> {
    item: 0,
    childrenItem: null,
    title: "label_library"
  },
  reducers: {
    setItem: (state, action) => {
      state.childrenItem = null;
      state.item = action.payload;
    },
    setChildrenItem: (state, action) => {
      state.childrenItem = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});

export const {
  setItem, setChildrenItem, setTitle
} = slice.actions;

export const reducer = slice.reducer;
