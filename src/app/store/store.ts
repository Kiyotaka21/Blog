import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "../../shared/userSlice/userSlice";
import { favoritesSliceReducer } from "../../pages/FavoritesPage/favoritesSlice/favoritesSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    favorites: favoritesSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
