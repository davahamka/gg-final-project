import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/authSlice";
import trackReducer from "./modules/tracks/trackSlice";
import playlistReducer from "./modules/playlist/playlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    track: trackReducer,
    playlist: playlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
