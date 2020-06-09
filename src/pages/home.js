import React, { Component } from 'react';

import BlogList from 'pages/blog/blogList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <section className="diagonal-box bg-four">
            <div className="container">
              <h2>Recent Articles</h2>
              <div className="mb-4"></div>
              <div className="grid-3">
                <BlogList />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
