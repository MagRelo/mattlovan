import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import './ProjectCard.css';

import midifighter from '../../images/midifighter.png';
import scorebug from '../../images/scorebug.png';
import referralTree from '../../images/referral-tree.svg';

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
    feature_image: referralTree,
    image_credit: '',
    image_alt: 'Referral tree diagram showing multi-level reward distribution',
    title: 'referralTree - Multi-Level Referral Reward System',
    excerpt:
      "Build viral growth through multi-level referral rewards. Solidity contracts implement a tree-based referral system where users earn rewards not just from their own referrals, but also from their referrer's referrals, creating exponential network growth incentives.",
    status: 'View Code',
    created_at: '2025-01-15T15:43:46.739Z',
    tech: ['Solidity', 'Foundry', 'Ethereum', 'Smart Contracts'],
    external_url: 'https://github.com/MagRelo/referralTree',
  },
  {
    type: 'project',
    feature_image: scorebug,
    image_credit: '',
    image_alt: '',
    title: 'Baseball Scorebug Redesign',
    excerpt:
      'The scorebug design should follow a left-to-right, "zoom level" approach that mirrors the structure of the content of the broadcast, from the widest context (the history, the ballpark, the series) down to the most immediate action.',
    status: 'Live',
    created_at: '2025-02-03T15:43:46.739Z',
    tech: ['vite', 'react', 'tailwind', 'typescript'],
    external_url: 'https://scorebug.mattlovan.dev',
  },
  {
    type: 'project',
    feature_image: 'https://cut.mattlovan.dev/cut-logo2-og.png',
    image_credit: '',
    image_alt: '',
    title: 'the Cut',
    excerpt:
      'Join the Cut to participate in fantasy golf competitions and track real-money bets. Create leagues, manage teams, and compete with live PGA Tour data.',
    status: 'Live',
    created_at: '2025-02-03T15:43:46.739Z',
    tech: ['vite', 'react', 'tailwind', 'typescript'],
    external_url: 'https://cut-v2.mattlovan.dev',
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
    external_url: 'https://github.com/MagRelo/oneshot',
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
        <a
          href={externalLink}
          target='_blank'
          rel='noopener noreferrer'
          className='update-repo-link'>
          <span className='account'>{externalLink}</span>
        </a>
      </div>
    );
  }

  if (status === 'View Code') {
    // Extract github.com/username/repo from the URL
    try {
      const url = new URL(externalLink);
      // Remove trailing paths like /blob/master/README.md, but keep /username/repo
      const pathParts = url.pathname.split('/').filter(Boolean);
      const githubPath =
        pathParts.length >= 2
          ? `github.com/${pathParts[0]}/${pathParts[1]}`
          : `github.com${url.pathname}`;

      return (
        <a
          href={externalLink}
          target='_blank'
          rel='noopener noreferrer'
          className='update-repo-link'>
          <svg className='github-icon' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
          {githubPath}
        </a>
      );
    } catch {
      // Fallback if URL parsing fails
      const githubPath = externalLink.replace(/^https?:\/\//, '');
      return (
        <a
          href={externalLink}
          target='_blank'
          rel='noopener noreferrer'
          className='update-repo-link'>
          <svg className='github-icon' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
          {githubPath}
        </a>
      );
    }
  }

  return null;
}
