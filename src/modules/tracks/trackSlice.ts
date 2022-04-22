import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../../utils/constants";
import { tracksApi } from "./api";
import { Item, SearchTracksResponse } from "./entities";

const searchTracks = createAsyncThunk("tracks/search", tracksApi.getTracks);

export interface TrackState {
  search: string | null;
  searchData: SearchTracksResponse | null;
  searchStatus: FetchStatus;
  errorSearch: any;
  selectedTracks: Array<Item>;
}

const initialState: TrackState = {
  search: null,
  searchData: null,
  searchStatus: "idle",
  errorSearch: null,
  selectedTracks: [],
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSelectedTracks: (state, action) => {
      state.selectedTracks = [...state.selectedTracks, action.payload];
    },
    removeSelectedTracks: (state, action) => {
      const newArr = state.selectedTracks.filter(
        (data) => data.uri != action.payload.uri
      );
      console.log("newArr", newArr);
      state.selectedTracks = newArr;
    },
    resetSelectedTracks: (state) => {
      state.selectedTracks = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchTracks.pending, (state) => {
        state.searchStatus = "pending";
      })
      .addCase(searchTracks.fulfilled, (state, action) => {
        state.searchData = action.payload;
        state.searchStatus = "succeded";
      })
      .addCase(searchTracks.rejected, (state, action) => {
        state.searchStatus = "failed";
        state.errorSearch = action.payload;
      });
  },
});

export { searchTracks };
export const {
  setSearch,
  setSelectedTracks,
  removeSelectedTracks,
  resetSelectedTracks,
} = trackSlice.actions;
export default trackSlice.reducer;
