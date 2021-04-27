import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

// import { Container } from './styles';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default routes;
