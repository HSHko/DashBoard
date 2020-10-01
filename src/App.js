import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import GlobalStyle from "styles/globalStyle";
import theme from "styles/theme";
import { CssBaseline } from "@material-ui/core";

const LoggedOut = React.lazy(() => import("./logged_out/Main"));

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <GlobalStyle />
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route>
                <LoggedOut />
              </Route>
            </Switch>
          </React.Suspense>
        </MaterialThemeProvider>
      </StyledThemeProvider>
    </BrowserRouter>
  );
}

export default App;
