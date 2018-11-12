import React, { Component } from 'react';
import './css/App.css';

import TwitterLogo from './images/twitter.svg';
import MediumLogo from './images/medium.svg';

const projects = [
  {
    type: 'demo',
    title: '(Web)MIDI Fighter 3D',
    tagline:
      'Connect any MIDI instrument to your computer and play music live on the web',
    tech: ['WebMIDI', 'WebAudio', 'WebSockets', '3D CSS'],
    featured: true,
    url: 'http://google.com'
  },
  {
    type: 'demo',
    title: 'Digital Signatures',
    tagline:
      'Use digital signatures instead of username & password in traditional web applications',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Mechanism Design'],
    featured: false,
    url: 'http://google.com'
  },
  {
    type: 'concept',
    title: 'Community Garden',
    tagline:
      'Dynamic community-building using behavioral psycology and mechanism design.',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Human Systems'],
    featured: false,
    url: 'http://google.com'
  },
  {
    type: 'concept',
    title: 'Souvenir',
    tagline:
      'Create meaningful digital artfacts by leveraging real-world experiences',
    tech: ['Ethereum', 'ERC721', 'ERC998', 'Web3', 'Art'],
    featured: false,
    url: 'http://google.com'
  },
  {
    type: 'concept',
    title: 'Priority Pricing',
    tagline:
      'Protocol for demand-based pricing that blurs the line betwen employee and free-lancer',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Mechanism Design'],
    featured: false,
    url: 'http://google.com'
  },

  {
    type: 'article',
    title: 'Curation Tournament',
    tagline:
      'A game designed to encourage a group of players to reach consensus around a list of items.',
    tech: ['Mechanism Design'],
    featured: false,
    url: 'https://medium.com/@mattlovan/curation-tournament-babbf0155a36'
  }
];

const projectTile = projectData => {
  return (
    <div
      key={projectData.title}
      className={(projectData.featured ? 'featured ' : '') + 'project'}
    >
      <div className="image" />
      <span className="project-type mono">{projectData.type}</span>

      <a href={projectData.url}>
        <h2 className="accent">{projectData.title}</h2>
      </a>

      <p>{projectData.tagline}</p>
      <div>
        {projectData.tech.map(item => {
          return (
            <span key={item} className="project-tech">
              {item}
            </span>
          );
        })}
      </div>
      <div>
        <a href={projectData.url}>
          <div className="project-link">view {projectData.type} ▶</div>
        </a>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="grid">
            <header>
              <h1 className="accent">Servesa</h1>
              <p className="mono">
                concepts / demos / projects by{' '}
                <span
                  style={{
                    fontWeight: 'bold',
                    paddingLeft: '0.125em',
                    display: 'inline-block'
                  }}
                >
                  Matt Lovan
                </span>
              </p>
            </header>

            <section id="project-grid">
              {projects.map(project => {
                return projectTile(project);
              })}
            </section>

            <section className="mono" id="contact">
              <div className="contact-grid">
                <a href="https://twitter.com/mattlovan">
                  <p>
                    <img src={TwitterLogo} alt="" />
                    @mattlovan
                  </p>
                </a>
                <a href="https://medium.com/@mattlovan">
                  <p>
                    <img src={MediumLogo} alt="" />
                    @mattlovan
                  </p>
                </a>
              </div>
            </section>
          </div>

          <footer>
            <p className="mono">2018</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
