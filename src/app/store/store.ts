import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "../../shared/userSlice/userSlice";
import { saveState } from "../../shared/storage";
import { animeSliceReducer } from "../../shared/animeSlice/animeSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    anime: animeSliceReducer,
  },
});

store.subscribe(() => {
  saveState({ jwt: store.getState().user.jwt }, "userData");
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
