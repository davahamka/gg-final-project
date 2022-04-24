import { spotifyApi } from "../../utils/fetcher";
import { MyPlaylistResponse } from "./entities";

interface AddPlaylistProps {
  name: string;
  description: string;
  token: string;
  userId: string;
}

interface AddTracksToPlaylist {
  uris: string;
  playlistId: string;
  token: string;
}

export const playlistApi = {
  getUserPlaylist: async (token: string, { rejectWithValue }: any) => {
    try {
      const response = await spotifyApi.get<MyPlaylistResponse>(
        `me/playlists?access_token=${token}&limit=30`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  addPlaylist: async (
    { description, name, token, userId }: AddPlaylistProps,
    { rejectWithValue }: any
  ) => {
    try {
      const response = await spotifyApi.post(
        `users/${userId}/playlists?access_token=${token}`,
        {
          name,
          description,
          public: false,
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  addTrackToPlaylist: async (
    { playlistId, token, uris }: AddTracksToPlaylist,
    { rejectWithValue }: any
  ) => {
    try {
      const response = await spotifyApi.post(
        `playlists/${playlistId}/tracks?access_token=${token}&uris=${uris}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
};
