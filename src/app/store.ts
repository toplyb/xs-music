import { configureStore } from '@reduxjs/toolkit';
import songSlice from '@/features/song/index.ts';

export const store = configureStore({
  reducer: {
    song: songSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
