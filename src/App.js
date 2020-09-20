import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';
import {Home} from './pages/pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router basename={window.location.pathname || ''}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
