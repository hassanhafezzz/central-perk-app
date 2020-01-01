import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Loader from './components/common/Loader';
const Home = lazy(() => import('./components/Home'));
const Products = lazy(() => import('./components/Products'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <Router>
          <Suspense fallback={<Loader />}>
            <Nav />
            <Switch>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
