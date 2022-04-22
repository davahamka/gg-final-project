import axios from "axios";
import { API_SPOTIFY } from "./constants";

export const spotifyApi = axios.create({
  baseURL: API_SPOTIFY,
});
