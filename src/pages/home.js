import React, { Component } from 'react';

import HeadShot from '../images/matt_headshot_blue.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <section className="diagonal-box bg-five">
            <div className="container">
              <div className="grid grid-3">
                <div>
                  <img
                    src={HeadShot}
                    alt=""
                    style={{
                      float: 'left',
                      height: '90px',
                      margin: ' 0 1rem 0rem 0',
                      border: 'solid 2px #333',
                      borderRadius: '50%',
                    }}
                  />
                  <p>
                    Hi, I'm <b>Matt Lovan</b>. Originally from Idaho, I now
                    split my time between New York and Boise. When I'm not
                    behind a keyboard I like to be hiking in the Sawtooth
                    Mountains or chasing a ball around a golf course.
                  </p>
                  <p>
                    Over the past 10+ years I've worked on many types of
                    projects, from government tax systems to small startups. My
                    specialty is <b>helping growth-stage companies</b>{' '}
                    transition from expensive vendor platforms into powerful,
                    scalable systems and processes. This transition can unlock
                    new opportunities and/or have impact for years to come so it
                    is important to get it right. Read more on my blog.
                  </p>
                  <p>
                    Lately I've been excited about new ways to account for and
                    capture value, such as cryptocurrencies. I'm currently
                    developing a way to crowd-source recruiting called Talent
                    Relay.
                  </p>
                </div>

                <div>
                  <h3>Tech Stack</h3>
                  <div className="spacer-1"></div>
                  <ul className="tech-stack">
                    <li>
                      <span className="tech-stack-header">Infrastructure</span>
                      <ul className="tech-stack-items">
                        <li>Linux</li>
                        <li>Docker</li>
                        <li>NGINX</li>
                      </ul>
                    </li>
                    <li>
                      <span className="tech-stack-header">Data Stores</span>
                      <ul className="tech-stack-items">
                        <li>SQL (postgres)</li>
                        <li>MongoDB</li>
                        <li>ElasticSearch</li>
                      </ul>
                    </li>
                    <li>
                      <span className="tech-stack-header">Application</span>
                      <ul className="tech-stack-items">
                        <li>Node.js</li>
                      </ul>
                    </li>
                    <li>
                      <span className="tech-stack-header">Client</span>
                      <ul className="tech-stack-items">
                        <li>React</li>
                        <li>Web3</li>
                        <li>ethers.js</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <h2>Blog</h2>
          <div style={{ paddingTop: '60px' }}></div>

          <section className="">
            <div className="container">
              <div>Performant Art</div>
              <div className="grid-blog">
                <div>search</div>
                <div>
                  <h4>Title</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsam illo, ut molestias quae cupiditate ex architecto,
                    animi dolores id iusto ducimus fugit quaerat. Ab sequi
                    quisquam atque doloremque nihil est?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam illo quasi odit quibusdam hic eveniet asperiores,
                    corporis minus voluptatem explicabo accusantium tempora
                    laudantium reiciendis temporibus quis sapiente omnis.
                    Placeat, facilis.
                  </p>
                </div>
                <div>topics</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;

// import ArticleCard from './components/articleCard/ArticleCard';

// const slidesUrl =
//   'https://docs.google.com/presentation/d/e/2PACX-1vQiyHWeRfKluDE_RAYgefiX_ODY4hrn8Y4jL7M5s1wKo5V2Eyd3Wf2HcIzGZIGt8hxoXc2ebYhPugrX/pub?start=false&loop=false&delayms=3000';

// const networkURL =
//   'https://medium.com/@mattlovan/run-a-public-ethereum-testnet-f0e40cefc1f2';

// const demos = [
//   {
//     type: 'demo',
//     title: 'Digital Signatures',
//     tagline: `Use digital signatures instead of username & password in traditional web applications.
//       See accompanying <a target="_blank" href="${slidesUrl}" rel="noopener noreferrer">slides<a/>.`,
//     tech: ['Ethereum', 'Web3', 'WebSockets'],
//     featured: false,
//     url: 'https://signatures.servesa.io',
//   },
//   {
//     type: 'demo',
//     title: 'Oneshot',
//     tagline: 'You can visit any URL - but only once...',
//     tech: ['Nods.js', 'Express', 'Pug'],
//     featured: true,
//     url: 'https://oneshot.servesa.io',
//   },
//   {
//     type: 'demo',
//     title: '(Web)MIDI Fighter 3D',
//     tagline:
//       'Connect any MIDI instrument to your computer and play music live on the web',
//     tech: ['WebMIDI', 'WebAudio', 'WebSockets', '3D CSS'],
//     featured: true,
//     url: 'https://midifighter.servesa.io',
//   },
// ];

// const concepts = [
//   {
//     type: 'concept',
//     title: 'Community Garden',
//     tagline:
//       'Dynamic community-building using behavioral psychology and mechanism design.',
//     tech: ['Ethereum', 'ERC721', 'Web3', 'Human Systems'],
//     featured: false,
//     url: 'https://garden.servesa.io',
//   },
//   {
//     type: 'concept',
//     title: 'Souvenir',
//     tagline:
//       'Create meaningful digital artifacts by leveraging real-world experiences',
//     tech: ['Ethereum', 'ERC721', 'ERC998', 'Web3', 'Art'],
//     featured: false,
//     url: 'https://souvenir.servesa.io',
//   },
// ];

// const articles = [
//   {
//     type: 'article',
//     date: '2019-06-03T15:43:46.739Z',
//     image:
//       'https://cdn-images-1.medium.com/max/1200/1*2d9jmfyEXTKndCbBeOlihA.png',
//     image_credit: 'Photo by Thomas Kvistholt on Unsplash',
//     image_alt: '',
//     title: 'Run your own Public Ethereum Testnet',
//     description:
//       'If you’re developing a dApp for Ethereum it can be nice to have a semi-permanent, semi-public environment available for testing. This allows you to do things like pre-fund accounts with ETH, control gas limits, speed-up confirmation times, etc. This guide will focus on the steps to set up an Ethereum Proof-of-Authority testnet that is available from the public internet.',
//     tech: ['geth', 'Docker', 'NGINX', 'Ubuntu'],
//     featured: false,
//     url: networkURL,
//   },
//   {
//     type: 'article',
//     date: '2018-12-05T15:43:46.739Z',
//     image:
//       'https://cdn-images-1.medium.com/max/2000/1*6K5vmzalJUxn44v3cm6wBw.jpeg',
//     image_credit: 'Photo by Thomas Kvistholt on Unsplash',
//     image_alt: '',
//     title: 'Deploy a Scalable Open-Source Architecture',
//     description:
//       'The architecture of Servesa – provisioning a virtual machine, installing SSL certificates, defining a network of Docker containers, and tweaking the configuration for local development. This architecture uses free, open-source tools, it runs on any cloud provider (or can be scaled across multiple providers), and it can handle thousands of requests per minute.',
//     tech: ['Docker', 'NGINX', 'SSL', 'Networking'],
//     featured: false,
//     url:
//       'https://medium.com/@mattlovan/deploy-a-scalable-open-source-architecture-4349cfe27e',
//   },

//   {
//     type: 'concept',
//     date: '2018-07-16T18:39:44.651Z',
//     title: 'Priority Pricing',
//     description:
//       'Protocol for demand-based pricing to reduce transaction costs for freelance workers.',
//     tech: ['Ethereum', 'ERC721', 'Web3', 'Mechanism Design'],
//     featured: false,
//     url: 'https://github.com/MagRelo/laborMarket/blob/master/README.md',
//   },
//   {
//     type: 'article',
//     date: '2018-02-16T18:39:44.651Z',
//     title: 'Curation Tournament',
//     image:
//       'https://cdn-images-1.medium.com/max/2000/1*CfvgTvNenSNTKXhDFUbLtg.jpeg',
//     image_credit: 'Photo by Michał Parzuchowski on Unsplash',
//     image_alt: '',
//     description:
//       'Modeled on a poker tournament, this game is designed to encourage a group of players to reach consensus around a list of items. Players can increase their share of the pot by predicting the group consensus around adding or removing items from the list.',
//     tech: ['Mechanism Design'],
//     featured: false,
//     url: 'https://medium.com/@mattlovan/curation-tournament-babbf0155a36',
//   },
//   {
//     type: 'article',
//     date: '2017-08-18T21:40:42.442',
//     title: 'Reputation and Identity in Decentralized Systems',
//     image:
//       'https://cdn-images-1.medium.com/max/1915/1*Q9uMiib0_ejNQHG8-xp5-Q.jpeg',
//     image_credit: 'Photo by Michał Parzuchowski on Unsplash',
//     image_alt: '',
//     description:
//       "A survey of centralized and decentralized reputation and identity systems. Also summarizes research on social credit schemes such as 'Trust is Risk' and 'Trust in Friends'.",
//     tech: ['Identity', 'Reputation'],
//     featured: false,
//     url:
//       'https://medium.com/@mattlovan/reputation-and-identity-in-decentralized-systems-ba4a7ff99cc4',
//   },
// ];

// function createMarkup(input) {
//   return { __html: input };
// }

// const projectTile = (projectData) => {
//   return (
//     <div key={projectData.title} className="project clear">
//       {/* <span className="project-type mono">{projectData.type}</span> */}

//       <h3>
//         <a href={projectData.url} target="_blank" rel="noopener noreferrer">
//           {projectData.title}
//         </a>
//       </h3>

//       <p dangerouslySetInnerHTML={createMarkup(projectData.tagline)} />
//       <div>
//         {projectData.tech.map((item) => {
//           return (
//             <span key={item} className="project-tech">
//               {item}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
