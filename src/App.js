import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import Films from './views/Films';
import Main from './views/Main';
import People from './views/People';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route ecat path="/films" component={Films} />
          <Route ecat path="/people" component={People} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
