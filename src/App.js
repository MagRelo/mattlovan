import React, { Component } from 'react';

import { Router } from '@reach/router';
import { OnRouteChange } from './components/routingHack';

import Header from './components/header';

// Routes
import Home from './pages/home';
import Blog from './pages/blog/blogList';
import BlogPost from './pages/blog/blogPost';
import TagPage from './pages/blog/tag';

import NotFound from './pages/404';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <div>
          <Router>
            <Home path="/" />

            {/* Blog */}
            <BlogPost path="blog/:slug" />
            <Blog path="blog"></Blog>

            {/* Tag */}
            <TagPage path="tag/:slug" />

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
