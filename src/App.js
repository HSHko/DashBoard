import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyle";
import theme from "styles/theme";
import { CssBaseline } from "@material-ui/core";

const LoggedOut = React.lazy(() => import("./logged_out/Main"));

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route>
              <LoggedOut />
            </Route>
          </Switch>
        </React.Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
