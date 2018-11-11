import React, { Component } from 'react';
import './css/App.css';

import Can from './images/can.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="grid">
            <header>
              <img src={Can} alt="" />
              <h1 className="accent">Servésa</h1>
              <p className="mono">
                concepts / demos / projects by{' '}
                <span style={{ fontWeight: 'bold', paddingLeft: '0.125em' }}>
                  Matt Lovan
                </span>
              </p>
            </header>

            <section id="demos">
              <h2>WebMidi Fighter</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                beatae eaque repudiandae asperiores facere minus at quod.
                Maiores pariatur, consequuntur dolorum debitis, fugiat id totam
                blanditiis officiis, iure numquam odio.
              </p>
              <h2>#1</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                beatae eaque repudiandae asperiores facere minus at quod.
                Maiores pariatur, consequuntur dolorum debitis, fugiat id totam
                blanditiis officiis, iure numquam odio.
              </p>
              <h2>#1</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                beatae eaque repudiandae asperiores facere minus at quod.
                Maiores pariatur, consequuntur dolorum debitis, fugiat id totam
                blanditiis officiis, iure numquam odio.
              </p>
              <h2>#1</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                beatae eaque repudiandae asperiores facere minus at quod.
                Maiores pariatur, consequuntur dolorum debitis, fugiat id totam
                blanditiis officiis, iure numquam odio.
              </p>
            </section>

            <section id="writing">
              <h2>Activity</h2>
              <ul>
                <li>article 1</li>
                <li>article 2</li>
                <li>article 3</li>
              </ul>
            </section>

            <section className="mono" id="contact">
              <div className="contact-grid">
                <a href="">
                  <p>@mattlovan</p>
                </a>
                <a href="">
                  <p>medium</p>
                </a>
                <a href="">
                  <p>mattlovan@gmail.com</p>
                </a>
              </div>
            </section>
          </div>

          <footer>
            <p>2018</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
