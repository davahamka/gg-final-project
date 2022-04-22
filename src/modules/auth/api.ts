import { spotifyApi } from "../../utils/fetcher";
import { GetUserResponse } from "./entities";

export const authApi = {
  getProfileUser: async (token: string, { rejectWithValue }: any) => {
    try {
      const response = await spotifyApi.get<GetUserResponse>(
        `/me?access_token=${token}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
};
