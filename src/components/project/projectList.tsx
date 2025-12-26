import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import './ProjectCard.css';

import midifighter from '../../images/midifighter.png';
import scorebug from '../../images/scorebug.png';

const defaultImage = '/images/comingsoon.jpg';
const defaultDateString = '2018-02-16T18:39:44.651Z';

interface Project {
  type: string;
  feature_image?: string;
  image_credit?: string;
  image_alt?: string;
  title: string;
  excerpt: string;
  status: string;
  created_at: string;
  tech?: string[];
  external_url: string;
  featured?: boolean;
  id?: string;
}

const projects: Project[] = [
  {
    type: 'project',
    feature_image: scorebug,
    image_credit: '',
    image_alt: '',
    title: 'Baseball Scorebug Redesign Exercise',
    excerpt:
      'The scorebug design should follow a left-to-right, "zoom level" approach that mirrors the structure of the content of the broadcast, from the widest context (the history, the ballpark, the series) down to the most immediate action.',
    status: 'Live',
    created_at: '2025-02-03T15:43:46.739Z',
    tech: ['vite', 'react', 'tailwind', 'typescript'],
    external_url: 'https://scorebug.mattlovan.dev',
  },
  {
    type: 'project',
    feature_image: 'https://cut.mattlovan.dev/cut-logo.png',
    image_credit: '',
    image_alt: '',
    title: 'the Cut',
    excerpt:
      'Join the Cut to participate in fantasy golf competitions and track real-money bets. Create leagues, manage teams, and compete with live PGA Tour data.',
    status: 'Live',
    created_at: '2025-02-03T15:43:46.739Z',
    tech: ['vite', 'react', 'tailwind', 'typescript'],
    external_url: 'https://cut.mattlovan.dev',
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

interface ProjectCardProps {
  article: Project;
}

const ProjectCard = ({ article }: ProjectCardProps) => {
  return (
    <div>
      <div className='post-card project-card'>
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

        <div>
          <div className='post-title'>{article.title}</div>
          <p className='excerpt'>{article.excerpt}</p>
        </div>

        <div className='status-grid'>
          <div className='status-content'>
            {statusWrapper(article.status, article.external_url)}
          </div>
        </div>
      </div>
    </div>
  );
};

function statusWrapper(status: string, externalLink: string) {
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

  return null;
}

