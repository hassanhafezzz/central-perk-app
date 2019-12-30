// import React, { Component, Suspense, lazy } from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';

/* ----------
    -- For Better Performance --
  == remove unnecessary packages ==
----------  */
/* eslint-disable */
import Swiper from 'react-id-swiper';
import rd3 from 'react-d3-library';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { OrderedMap } from 'immutable';
/* eslint-enable */

/* ----------
 -- For Better Performance --
  == use code splitting ==
----------  */
import Loader from './components/common/Loader';
// const Home = lazy(() => import('./components/Home'));
// const Products = lazy(() => import('./components/Products'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              {isLoading ? <Loader /> : <Home />}
            </Route>
            <Route exact path="/products">
              {isLoading ? <Loader /> : <Products />}
            </Route>
          </Switch>
          <Footer />
        </Router>
        {/* ----------
          -- For Better Performance --
            == use code splitting ==
          ---------- /* }
        {/*
          <Router>
            <Suspense fallback={<Loader />}>
              <Nav />
              <Switch>
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
              <Footer />
            </Suspense>
          </Router>
        */}
      </>
    );
  }
}

export default App;
