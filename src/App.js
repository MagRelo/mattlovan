import React, { Component } from 'react';
import './css/App.css';

import TwitterLogo from './images/twitter.svg';
import MediumLogo from './images/medium.svg';
import GithubLogo from './images/GitHub-Mark-Light-32px.png';

import ArticleCard from './components/articleCard/ArticleCard';

const demos = [
  {
    type: 'demo',
    title: 'Digital Signatures',
    tagline:
      'Use digital signatures instead of username & password in traditional web applications. See accompanying <a target="_blank" href="https://docs.google.com/presentation/d/e/2PACX-1vQiyHWeRfKluDE_RAYgefiX_ODY4hrn8Y4jL7M5s1wKo5V2Eyd3Wf2HcIzGZIGt8hxoXc2ebYhPugrX/pub?start=false&loop=false&delayms=3000">slides<a/>.',
    tech: ['Ethereum', 'Web3', 'WebSockets'],
    featured: false,
    url: 'https://signatures.servesa.io'
  },
  {
    type: 'demo',
    title: '(Web)MIDI Fighter 3D',
    tagline:
      'Connect any MIDI instrument to your computer and play music live on the web',
    tech: ['WebMIDI', 'WebAudio', 'WebSockets', '3D CSS'],
    featured: true,
    url: 'https://midifighter.servesa.io'
  }
];

const concepts = [
  {
    type: 'concept',
    title: 'Community Garden',
    tagline:
      'Dynamic community-building using behavioral psychology and mechanism design.',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Human Systems'],
    featured: false,
    url: 'https://garden.servesa.io'
  },
  {
    type: 'concept',
    title: 'Souvenir',
    tagline:
      'Create meaningful digital artfacts by leveraging real-world experiences',
    tech: ['Ethereum', 'ERC721', 'ERC998', 'Web3', 'Art'],
    featured: false,
    url: 'https://souvenir.servesa.io'
  }
];

const articles = [
  {
    type: 'article',
    date: '2018-12-05T15:43:46.739Z',
    image:
      'https://cdn-images-1.medium.com/max/2000/1*6K5vmzalJUxn44v3cm6wBw.jpeg',
    image_credit: 'Photo by Thomas Kvistholt on Unsplash',
    image_alt: '',
    title: 'Deploy a Scalable Open-Source Architecture',
    description:
      'The architecture of servesa.io – creating virtual machines, getting SSL certificates, defining a network of Docker containers, and tweaking the configuration for local development.',
    tech: ['Docker', 'NGINX', 'SSL', 'Networking'],
    featured: false,
    url:
      'https://medium.com/@mattlovan/deploy-a-scalable-open-source-architecture-4349cfe27e'
  },
  {
    type: 'article',
    date: '2018-02-16T18:39:44.651Z',
    title: 'Curation Tournament',
    image:
      'https://cdn-images-1.medium.com/max/2000/1*CfvgTvNenSNTKXhDFUbLtg.jpeg',
    image_credit: 'Photo by Michał Parzuchowski on Unsplash',
    image_alt: '',
    description:
      'A game designed to encourage a group of players to reach consensus around a list of items.',
    tech: ['Mechanism Design'],
    featured: false,
    url: 'https://medium.com/@mattlovan/curation-tournament-babbf0155a36'
  },
  {
    type: 'article',
    date: '2017-08-18T21:40:42.442',
    title: 'Reputation and Identity in Decentralized Systems',
    image:
      'https://cdn-images-1.medium.com/max/1915/1*Q9uMiib0_ejNQHG8-xp5-Q.jpeg',
    image_credit: 'Photo by Michał Parzuchowski on Unsplash',
    image_alt: '',
    description:
      'Survey of the challenges of decentralized reputation and identity systems',
    tech: ['Identity', 'Reputation'],
    featured: false,
    url:
      'https://medium.com/@mattlovan/reputation-and-identity-in-decentralized-systems-ba4a7ff99cc4'
  },
  {
    type: 'concept',
    date: '',
    title: 'Priority Pricing',
    description:
      'Protocol for demand-based pricing to reduce transaction costs',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Mechanism Design'],
    featured: false,
    url: 'https://github.com/MagRelo/laborMarket/blob/master/README.md'
  }
];

function createMarkup(input) {
  return { __html: input };
}

const projectTile = projectData => {
  return (
    <div key={projectData.title} className="project clear">
      {/* <span className="project-type mono">{projectData.type}</span> */}

      <h3>
        <a href={projectData.url} target="_blank" rel="noopener noreferrer">
          {projectData.title}
        </a>
      </h3>

      <p dangerouslySetInnerHTML={createMarkup(projectData.tagline)} />
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
        <a href={projectData.url} target="_blank" rel="noopener noreferrer">
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
              <p className="mono">demos & concepts by Matt Lovan</p>
            </header>

            <section className="mono" id="contact">
              <div className="contact-grid">
                <a
                  href="https://twitter.com/mattlovan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <img src={TwitterLogo} alt="twitter logo" />
                    @mattlovan
                  </p>
                </a>
                <a
                  href="https://medium.com/@mattlovan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <img src={MediumLogo} alt="medium logo" />
                    @mattlovan
                  </p>
                </a>
                <a
                  href="https://github.com/magrelo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <img
                      src={GithubLogo}
                      alt="github logo"
                      style={{ height: '1.2em' }}
                    />
                    magrelo
                  </p>
                </a>
              </div>
            </section>

            <section id="article-grid">
              <h2>Articles</h2>
              {articles.map(article => {
                return (
                  <div className="project clear" key={article.title}>
                    <ArticleCard article={article} />
                  </div>
                );
              })}
            </section>

            <section id="project-grid">
              <h2>Demos</h2>
              {demos.map(project => {
                return projectTile(project);
              })}

              <h2>Concepts</h2>
              <p>half-finished daydreams : )</p>
              {concepts.map(project => {
                return projectTile(project);
              })}
            </section>
          </div>

          <footer>
            <p className="mono">2019</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
