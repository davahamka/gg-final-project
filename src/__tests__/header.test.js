/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";
import Home from "../pages/Home";
import { store } from "../store";
import { API_SPOTIFY } from "../utils/constants";
import { BrowserRouter as Router } from "react-router-dom";
import UserEvent from "@testing-library/user-event"
import { searchTracks } from "../modules/tracks/trackSlice";
import { mocksTracksResponse } from "../__mocks__/tracks";
import MainHeader from "../components/Main/MainHeader";

const server = setupServer(
 rest.get(API_SPOTIFY+"search", (req,res,ctx)=>{
   return res(ctx.json(mocksTracksResponse))
 })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithProvider = (children) =>
  render(<Provider store={store}>{children}</Provider>);

  
test("it should find tracks", async () => {
  renderWithProvider(
  <Router>
    <Home />
  </Router>);

  await store.dispatch(searchTracks("tulus"))

  const searchInput = await screen.getByRole('textbox');

  // expect(searchInput).toBeInTheDocument();



});

test("input value should change", () => {
  renderWithProvider(
    <Router>
    <MainHeader />
    </Router>
  )

  const searchInput = screen.getByRole('textbox');

  UserEvent.type(searchInput, "tulus")

  expect(screen.getByDisplayValue("tulus")).toBeInTheDocument()

})
