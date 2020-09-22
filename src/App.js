import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import customTheme from 'styles/theme';
import * as pages from './pages/pages';
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Switch>
            <Route path="/">
              <pages.Home />
            </Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

// <BrowserRouter basename={window.location.pathname || ''}>