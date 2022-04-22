/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import UserEvent from "@testing-library/user-event"
import MainHeader from "../components/Main/MainHeader";

const renderWithProvider = (children) =>
  render(<Provider store={store}>{children}</Provider>);

it("it should render search component", () => {
    // renderWithProvider(<MainHeader />)
    
    // const homeInputSearch = screen.getByRole('textbox')

    // UserEvent.type(homeInputSearch,"tulus")

    

    // expect(homeInputSearch).toBeInTheDocument()
});
