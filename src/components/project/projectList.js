import React from 'react';

// import TalentRelay from 'images/talentrelay.png';
// import PositionPaper from 'images/positionpaper.png';

import './ProjectCard.scss';
const defaultImage = '/images/comingsoon.jpg';
const defaultDateString = '2018-02-16T18:39:44.651Z';

const projects = [
  {
    type: 'project',
    created_at: '2023-03-05T15:43:46.739Z',
    feature_image: null,
    image_credit: '',
    image_alt: '',
    title: 'Public Agent',
    excerpt:
      'Permissioning system based on DAO membership. Find and retain individual contrbutors using DAO membership.',
    status: 'In Development',
    tech: ['geth', 'Docker', 'NGINX', 'Ubuntu'],
    external_url: '',
  },
  {
    type: 'project',
    created_at: '2023-05-21T15:43:46.739Z',
    feature_image: null,
    image_credit: '',
    image_alt: '',
    title: 'Simulation',
    excerpt: 'Simulating protocol interactions using cadCAD & Machinations.',
    status: 'In Progress',
    tech: ['geth', 'Docker', 'NGINX', 'Ubuntu'],
    external_url: '',
  },
];

function ProjectList() {
  return (
    <>
      {projects.map((post, index) => {
        return <ProjectCard article={post} key={post.id || index} />;
      })}
    </>
  );
}

export default ProjectList;

const ProjectCard = ({ article }) => {
  return (
    <div style={{ maxWidth: '34rem' }}>
      <LinkWrapper href={article.external_url}>
        <div className='post-card project-card'>
          {/* Image */}
          <div
            className='post-img'
            style={{
              backgroundImage: `url('${
                article.feature_image || defaultImage
              }')`,
            }}
          />

          {/* Content */}
          <div>
            <div className='post-title'>{article.title}</div>
            <p className='excerpt'>{article.excerpt}</p>
          </div>

          {/* status  */}
          <div className='status-grid'>
            <div className='status-label'>Status:</div>
            <div className='status-label'>{article.status}</div>
            <div className='status-label'>Last Update:</div>
            <div className='status-label'>{formatDate(article.created_at)}</div>
          </div>
        </div>
      </LinkWrapper>
    </div>
  );
};

function LinkWrapper({ children, href }) {
  if (href && href.length) {
    console.log('use link: ', href);
    // return <a href={href}>{[children]}</a>;
    return <></>;
  } else {
    console.log('no link');
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
