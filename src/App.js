import React, { Component } from 'react';

import { Router, navigate } from '@reach/router';
import { OnRouteChange } from './components/routingHack';

import Header from './components/header';

// Routes
import Home from './pages/home';
import Blog from './pages/blog';
import NotFound from './pages/404';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Header />
        </div>

        <div className="">
          <Router>
            <Home path="/" />

            <Blog path="/blog" />

            {/* Auth required */}
            {/* {activeSession ? (
                <React.Fragment>
                  <UserDashboard path="/dashboard" />
                  <AdminDashboard path="/admin" />
                </React.Fragment>
              ) : null} */}

            <NotFound default />
          </Router>

          <OnRouteChange
            action={() => {
              window.scrollTo(0, 0);
            }}
          ></OnRouteChange>
        </div>

        <footer>
          <div className="container">
            <p>2019</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
