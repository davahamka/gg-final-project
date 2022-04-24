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
import Playlist from "./pages/Playlist";
import DetailPlaylist from "./pages/DetailPlaylist";
import Profile from "./pages/Profile";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <ChakraProvider theme={theme}>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>

            <Switch>
              <Route>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/playlist" component={Playlist} />
                <PrivateRoute
                  exact
                  path="/playlist/:id"
                  component={DetailPlaylist}
                />
                <PrivateRoute exact path="/profile" component={Profile} />
              </Route>
            </Switch>
          </ChakraProvider>
        </Router>
      </AppProvider>
    </Provider>
  );
}

export default App;
