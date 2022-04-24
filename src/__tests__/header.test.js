/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../pages/Login";
import { store } from "../store";

const renderWithProvider = (children) =>
  render(<Provider store={store}>{children}</Provider>);

test("it should render input component", () => {
  renderWithProvider(<Login />);
});
