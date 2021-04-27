import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from '../src/styles/themes/light';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Router>
  );
};

export default App;
