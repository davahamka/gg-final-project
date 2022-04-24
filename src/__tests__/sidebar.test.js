/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "../pages/Home";
import { store } from "../store";
import { setupServer} from "msw/node"
import { mockPlaylistResponse } from "../__mocks__/playlist";
import { rest } from "msw"
import Sidebar from "../components/Sidebar";

const server = setupServer(
    rest.get("/users/:id/playlist?accessToken=null&", (req, res, ctx) => {
      return res(ctx.json(mockPlaylistResponse));
    })
  );
  
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


const renderWithProvider = (children) =>
  render(<Provider store={store}>{children}</Provider>);

  
  it("it should render sidebar", () => {
    renderWithProvider(<Home />)

    const homeMenu = screen.getByText(/home/i)

    expect(homeMenu).toBeInTheDocument()
});

it("it should shows list of playlist",async () => {
    renderWithProvider(<Sidebar />)

    await screen.findByText("w")

    screen.debug()

    // expect(homeMenu).toBeInTheDocument()
});
