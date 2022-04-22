import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../../utils/constants";
import { playlistApi } from "./api";
import { MyPlaylistResponse } from "./entities";

export interface PlaylistState {
  dataMyPlaylist: MyPlaylistResponse | null;
  statusMyPlaylist: FetchStatus;
  errorMyPlaylist: any;

  dataCreatePlaylist: any;
  statusCreatePlaylist: FetchStatus;
  errorCreatePlaylist: any;

  dataInsertTrackToPlaylist: any;
  statusInsertTrackToPlaylist: FetchStatus;
  errorInsertTrackToPlaylist: any;
}

const initialState: PlaylistState = {
  dataMyPlaylist: null,
  statusMyPlaylist: "idle",
  errorMyPlaylist: null,

  dataCreatePlaylist: null,
  statusCreatePlaylist: "idle",
  errorCreatePlaylist: null,

  dataInsertTrackToPlaylist: null,
  statusInsertTrackToPlaylist: "idle",
  errorInsertTrackToPlaylist: null,
};

const getMyPlaylist = createAsyncThunk(
  "playlist/getPlaylist",
  playlistApi.getUserPlaylist
);

const createPlaylist = createAsyncThunk(
  "playlist/createPlaylist",
  playlistApi.addPlaylist
);

const insertTrackToPlaylist = createAsyncThunk(
  "playlistt/insertTracks",
  playlistApi.addTrackToPlaylist
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyPlaylist.pending, (state) => {
        state.statusMyPlaylist = "pending";
      })
      .addCase(getMyPlaylist.fulfilled, (state, action) => {
        state.dataMyPlaylist = action.payload;
        state.statusMyPlaylist = "succeded";
      })
      .addCase(getMyPlaylist.rejected, (state, action) => {
        state.statusMyPlaylist = "failed";
        state.errorMyPlaylist = action.payload;
      })
      .addCase(createPlaylist.pending, (state) => {
        state.statusCreatePlaylist = "pending";
      })
      .addCase(createPlaylist.fulfilled, (state, action) => {
        state.statusCreatePlaylist = "succeded";
        state.dataCreatePlaylist = action.payload;
      })
      .addCase(createPlaylist.rejected, (state, action) => {
        state.errorCreatePlaylist = action.payload;
        state.statusCreatePlaylist = "failed";
      })
      .addCase(insertTrackToPlaylist.pending, (state) => {
        state.statusInsertTrackToPlaylist = "pending";
      })
      .addCase(insertTrackToPlaylist.fulfilled, (state, action) => {
        state.dataInsertTrackToPlaylist = action.payload;
        state.statusInsertTrackToPlaylist = "succeded";
      })
      .addCase(insertTrackToPlaylist.rejected, (state, action) => {
        state.dataInsertTrackToPlaylist = action.payload;
        state.statusInsertTrackToPlaylist = "failed";
      });
  },
});

export { getMyPlaylist, createPlaylist, insertTrackToPlaylist };
export default playlistSlice.reducer;
