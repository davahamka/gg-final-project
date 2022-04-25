/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { setupServer} from "msw/node"
import { mockPlaylistResponse } from "../__mocks__/playlist";
import { rest } from "msw"
import Sidebar from "../components/Sidebar";
import { API_SPOTIFY } from "../utils/constants";
import { getMyPlaylist } from "../modules/playlist/playlistSlice";

const server = setupServer(
    rest.get(API_SPOTIFY+"me/playlists", (req, res, ctx) => {
      return res(ctx.json(mockPlaylistResponse));
    })
  );
  
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


const renderWithProvider = (children) =>
  render(<Provider store={store}>{children}</Provider>);

  
  it("it should render sidebar",async () => {
    renderWithProvider(<Sidebar />)

    const homeMenu = await screen.getByText(/home/i)

    expect(homeMenu).toBeInTheDocument()
});

it("it should shows list of playlist",async () => {
    renderWithProvider(<Sidebar />)


    await store.dispatch(getMyPlaylist())
    const playlistName =await screen.getByText(/dww/i)

  

    expect(playlistName).toBeInTheDocument()
});
