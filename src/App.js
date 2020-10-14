import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import injectContext from './store/appContext';
import Films from './views/Films';
import Main from './views/Main';
import People from './views/People';
import Lost from './views/lost';
import Locations from './views/Locations';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route excat path="/films" component={Films} />
          <Route excat path="/people" component={People} />
          <Route excat path="/locations" component={Locations} />
          <Route component={Lost} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
