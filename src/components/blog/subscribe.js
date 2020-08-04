import React, { useState } from 'react';

import { subscribe } from 'api/ghost';

export default function Subscribe({ post }) {
  const [error, setError] = useState([]);
  const [response, setResponse] = useState({});

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <div className="panel cta-panel">
      <div className="h4">Subscribe</div>
      <p>Get this stuff delivered directly to your inbox</p>

      <form
        onSubmit={submitForm}
        className="form-inline"
        style={{ justifyContent: 'center' }}
      >
        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
          Email
        </label>
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend">
            <div className="input-group-text">Email</div>
          </div>
          <input
            type="email"
            required
            className="form-control"
            id="inlineFormInputGroupUsername2"
          ></input>
        </div>
        <button className="btn btn-primary mb-2">Subscribe</button>
      </form>
    </div>
  );
}
