import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "../../utils/constants";
import { authApi } from "./api";
import { GetUserResponse } from "./entities";

export interface AuthState {
  token: string | null;
  statusProfile: FetchStatus;
  dataProfile: GetUserResponse | null;
  errorProfile: any;
}

const initialState: AuthState = {
  token: localStorage.getItem("access_token") || null,
  statusProfile: "idle",
  dataProfile: null,
  errorProfile: "",
};

const getProfileAuth = createAsyncThunk(
  "auth/createProfile",
  authApi.getProfileUser
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
    setToken: (state, action) => {
      const { accessToken } = action.payload;
      localStorage.setItem("access_token", accessToken);
      state.token = accessToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileAuth.pending, (state) => {
        state.statusProfile = "pending";
      })
      .addCase(getProfileAuth.fulfilled, (state, action) => {
        state.statusProfile = "succeded";
        state.dataProfile = action.payload;
      })
      .addCase(getProfileAuth.rejected, (state, action) => {
        state.statusProfile = "failed";
        state.errorProfile = action.payload;
        state.token = null;
        localStorage.removeItem("access_token");
      });
  },
});

export { getProfileAuth };
export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
