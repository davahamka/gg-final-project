import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./lib/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ChakraProvider theme={theme}>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </ChakraProvider>
      </Router>
    </Provider>
  );
}

export default App;
