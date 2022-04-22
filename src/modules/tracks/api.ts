import { spotifyApi } from "../../utils/fetcher";
import { SearchTracksResponse } from "./entities";
// import { MyPlaylistResponse } from "./entities";

interface GetTracksProps {
  q: string;
  token: string;
}

export const tracksApi = {
  getTracks: async ({ q, token }: GetTracksProps, { rejectWithValue }: any) => {
    try {
      const response = await spotifyApi.get<SearchTracksResponse>(
        `search?q=${q}&access_token=${token}&type=track`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
};
