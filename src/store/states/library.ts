import { BackupCategory, BackupManga } from '../../services/backup/models/tachiyomi';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LibraryState {
  categories: BackupCategory[];
  mangas: BackupManga[];
}

const slice = createSlice({
  name: 'Library',
  initialState: <LibraryState> {
    categories: [{
      name: "Default"
    }],
    mangas: []
  },
  reducers: {
    addCategory: (state, action: PayloadAction<BackupCategory>) => {
      state.categories = [...state.categories, action.payload];
    },
    setCategories: (state, action: PayloadAction<BackupCategory[]>) => {
      state.categories = action.payload;
    },
    addManga: (state, action: PayloadAction<BackupManga>) => {
      state.mangas = [...state.mangas, action.payload];
    },
    setMangas: (state, action: PayloadAction<BackupManga[]>) => {
      state.mangas = action.payload;
    }
  }
});

export const {
  addCategory, setCategories, addManga, setMangas
} = slice.actions;

export const reducer = slice.reducer;