import React from 'react';
import { Link } from '@reach/router';

function NotFound(props) {
  return (
    <div className="page-container">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p>We're sorry – the page you're looking for was not found.</p>

        <p>Suggested Pages:</p>
        <ul className="list-unstyled">
          <li>
            <Link to="/">Home Page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotFound;
