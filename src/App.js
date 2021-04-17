import React, { Component } from 'react';

import { Router } from '@reach/router';
import { OnRouteChange } from './components/routingHack';

import Header from './components/header';

// Routes
import Home from './pages/home';
// import Blog from './components/blog/blogList';
// import BlogPost from './pages/blog/post';
// import TagPage from './pages/blog/tag';
import NotFound from './pages/404';

// relative time
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');
var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
d.setUTCSeconds(process.env.REACT_APP_BUILD_TIME);
const lastUpdate = timeAgo.format(d);

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />

        <div>
          <Router>
            <Home path='/' />

            {/* Blog */}
            {/* <Blog path="blog"></Blog> */}
            {/* <BlogPost path="blog/:slug" /> */}
            {/* <TagPage path="tag/:slug" /> */}

            <NotFound default />
          </Router>

          <OnRouteChange
            action={() => {
              window.scrollTo(0, 0);
            }}></OnRouteChange>
          <div className='stripe'></div>
        </div>

        <footer>
          <div className='container'>
            <div className='date clear' style={{ float: 'right' }}>
              Updated {lastUpdate}
            </div>
            <p>2020</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
