import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { SocialAccountLink } from '../SocialLink';

import './ProjectCard.scss';

import midifighter from '../../images/midifighter.png';

const defaultImage = '/images/comingsoon.jpg';
const defaultDateString = '2018-02-16T18:39:44.651Z';

const projects = [
  {
    type: 'project',
    // feature_image: networkImage,
    feature_image:
      'https://images.prismic.io/turing/659d771c531ac2845a2742a6_Directed_acyclic_graph_of_Bayesian_network_in_AI_6_11zon_ebf67e2f97.webp?auto=format,compress',
    image_credit: '',
    image_alt: '',
    title: 'Referral Relay',
    excerpt:
      'Referral Relay is a referral protocol based on Query Incentive Networks. Agents cooperate & compete to complete tasks created by Principals.',
    status: 'In Progress',
    created_at: '2024-08-10T15:43:46.739Z',
    tech: ['geth', 'Docker', 'NGINX', 'Ubuntu'],
    external_url: '',
  },
  {
    type: 'project',
    feature_image: 'https://rara.social/assets/images/share.jpg?v=712ff776',
    image_credit: '',
    image_alt: '',
    title: 'RARA Protocol',
    excerpt:
      "RARA protocol is a cross-chain EVM protocol designed to incentivize the curation of interesting and valuable NFT's. Each protocol interaction produces a unique NFT. \n\n RARA was acquired by MASK Network in April 2023.",
    status: 'Live',
    created_at: '2023-04-03T15:43:46.739Z',
    tech: ['geth', 'Docker', 'NGINX', 'Ubuntu'],
    external_url: 'https://rara.social',
  },

  {
    type: 'project',
    created_at: '2018-07-16T18:39:44.651Z',
    title: 'Priority Pricing',
    excerpt:
      'Protocol for demand-based pricing to reduce transaction costs for freelance workers.',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Mechanism Design'],
    featured: false,
    status: 'View Code',
    external_url:
      'https://github.com/MagRelo/laborMarket/blob/master/README.md',
  },
  {
    type: 'project',
    created_at: '2018-07-16T18:39:44.651Z',
    title: 'OneShot',
    excerpt:
      'This demo explores the idea of a "one-time" webpage, i.e., a page that will only be displayed once. ',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Mechanism Design'],
    featured: false,
    status: 'View Code',
    external_url:
      'https://github.com/MagRelo/laborMarket/blob/master/README.md',
  },
  {
    type: 'project',
    created_at: '2018-07-16T18:39:44.651Z',
    title: 'Digital Signature Demo',
    excerpt:
      'This demo was developed to demonstrate he usage od digital signatures.',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Mechanism Design'],
    featured: false,
    status: 'View Code',
    external_url: 'https://github.com/MagRelo/signingDemo',
  },

  {
    feature_image: midifighter,
    type: 'project',
    created_at: '2018-07-16T18:39:44.651Z',
    title: 'WebMIDI Fighter 3D',
    excerpt: 'WebMIDI API + 3D CSS',
    tech: ['Ethereum', 'ERC721', 'Web3', 'Mechanism Design'],
    featured: false,
    status: 'Live',
    external_url: 'https://midifighter.mattlovan.dev',
  },
];

function ProjectList() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter='1rem'>
        {projects.map((post, index) => {
          return <ProjectCard article={post} key={post.id || index} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ProjectList;

const ProjectCard = ({ article }) => {
  return (
    <div>
      <div className='post-card project-card'>
        {/* Image */}

        {article.feature_image ? (
          <div
            className='post-img'
            style={{
              backgroundPosition: 'center',
              backgroundImage: `url('${
                article.feature_image || defaultImage
              }')`,
            }}
          />
        ) : null}

        {/* Content */}
        <div>
          <div className='post-title'>{article.title}</div>
          <p className='excerpt'>{article.excerpt}</p>
        </div>

        {/* status  */}
        <div className='status-grid'>
          {/* <div className='status-label'>Status:</div> */}
          <div className='status-content'>
            {statusWrapper(article.status, article.external_url)}
          </div>
          {/* <div className='status-label'>Updated:</div>
            <div className='status-label'>{formatDate(article.created_at)}</div> */}
        </div>
      </div>
    </div>
  );
};

function LinkWrapper({ children, href }) {
  if (href && href.length) {
    // console.log('use link: ', href);
    return (
      <a href={href} target='_blank' rel='noreferrer'>
        {[children]}
      </a>
    );
  } else {
    // console.log('no link');
    return <>{children}</>;
  }
}

function formatDate(isoDate) {
  const date = new Date(isoDate || defaultDateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en', options);
}

function statusWrapper(status, externalLink) {
  if (status === 'Live') {
    return (
      <div style={{ display: 'inline-block' }}>
        <a href={externalLink} target='_blank' rel='noopener noreferrer'>
          <span className='account'>{externalLink}</span>
        </a>
      </div>
    );
  }

  if (status === 'View Code') {
    return (
      <div style={{ display: 'inline-block' }}>
        <a href={externalLink} target='_blank' rel='noopener noreferrer'>
          <span className='account'>{'View on GitHub'}</span>
        </a>
      </div>
    );
  }
}
