import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnimeItem {
  id: number;
}

export interface AnimeState {
  items: AnimeItem[];
}

const initialState: AnimeState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const isExist = state.items.some(item => item.id === action.payload)
      if (!isExist) {
        state.items.push({ id: action.payload });
      }      
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    removeAll: (state) => {
      state.items = []
    }
  },
});

export const favoritesActions = favoritesSlice.actions;
export const favoritesSliceReducer = favoritesSlice.reducer;
