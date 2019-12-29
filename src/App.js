// import React, { Component, Suspense, lazy } from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';

// import Loader from './components/common/Loader';
// const Home = lazy(() => import('./components/Home'));
// const Products = lazy(() => import('./components/Products'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Router>
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
        </Router>
        {/*
          using code splitting
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
