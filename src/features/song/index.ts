import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ISongItem {
  id: string;
  name: string;
  singer: string;
  record: string;
  timeDuration: string;
  imgUrl: string;
  isPlaying: boolean;
}

interface ISongState {
  songList: ISongItem[];
}

const initialState: ISongState = {
  songList: [],
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setSongList: (state, action: PayloadAction<ISongItem[]>) => {
      state.songList = action.payload;
    },
    setSongStatus: (state, action: PayloadAction<string>) => {
      state.songList = state.songList.map((song: ISongItem) => {
        if (song.id === action.payload) {
          return {
            ...song,
            isPlaying: !song.isPlaying,
          };
        }
        return song;
      });
    },
  },
});

export const { setSongList, setSongStatus } = songSlice.actions;
export default songSlice.reducer;
