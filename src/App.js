import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <header>
            <h1>Servesa</h1>
            <p>playground and demos by Matt Lovan</p>
          </header>

          <div className="grid">
            <section id="contact">
              <h2>Contact</h2>
              <p>@mattlovan</p>
              <p>medium</p>
            </section>

            <section id="demo-1">
              <h2>#1</h2>
            </section>

            <section id="demo-2">
              <h2>#2</h2>
            </section>

            <section id="demo-3">
              <h2>#3</h2>
            </section>

            <section id="demo-4">
              <h2>#4</h2>
            </section>

            <section id="timeline">
              <h2>Timeline</h2>
              <ul>
                <li>0</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </section>

            <section id="writing">
              <h2>Writing</h2>
              <ul>
                <li>article 1</li>
                <li>article 2</li>
                <li>article 3</li>
              </ul>
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
