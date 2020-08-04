import React from 'react';

import TalentRelay from 'images/talentrelay.png';
import PositionPaper from 'images/positionpaper.png';

import './ProjectCard.scss';
const defaultImage =
  'https://cdn-images-1.medium.com/max/2000/1*T1NrRFtxijHcsiQVRjRNJA@2x.jpeg';
const defaultDateString = '2018-02-16T18:39:44.651Z';

const projects = [
  {
    type: 'project',
    created_at: '2019-11-05T15:43:46.739Z',
    feature_image: TalentRelay,
    image_credit: '',
    image_alt: '',
    title: 'Talent Relay',
    excerpt:
      'Talent Relay is a SaaS platform for finding job candidates. It leverages an system called an "incentive tree" to motivate and compensate contributors. Companies can post a bounty to motivate the community to locate qualified candidates. When a candidate is hired & the bounty is paid each contributor gets a reward based on the importance of their contribution.',
    status: 'Live',
    tech: ['geth', 'Docker', 'NGINX', 'Ubuntu'],
    external_url: 'https://talentrelay.app',
  },
  {
    type: 'project',
    created_at: '2020-05-19T15:43:46.739Z',
    feature_image: PositionPaper,
    image_credit: '',
    image_alt: '',
    title: 'Position Paper',
    excerpt:
      'Position Paper is a social network built around verifiable predictions. It incorporates a variety of prediction mechanisms: currency & commodity trading, prediction markets, sports betting and more.',
    status: 'In Development',
    tech: ['Docker', 'NGINX', 'SSL', 'Networking'],
    external_url: 'https://position.incentive.exchange',
  },
];

function ProjectList() {
  return (
    <React.Fragment>
      {projects.map((post, index) => {
        return <ProjectCard article={post} key={post.id || index} />;
      })}
    </React.Fragment>
  );
}

export default ProjectList;

const ProjectCard = ({ article }) => {
  return (
    <React.Fragment>
      <a href={article.external_url} key={article.id}>
        <div className="post-card project-card">
          {/* Image */}
          <div
            className="post-img"
            style={{
              backgroundImage: `url('${article.feature_image ||
                defaultImage}')`,
            }}
          />

          {/* Content */}
          <div>
            <div className="post-title">{article.title}</div>
            <p className="excerpt">{article.excerpt}</p>
          </div>

          {/* status  */}
          <div className="status-grid">
            <div className="status-label">Status:</div>
            <div className="status-content">{article.status}</div>
            <div className="status-label">Deployed:</div>
            <div className="status-content">
              {formatDate(article.created_at)}
            </div>
          </div>
        </div>
      </a>
    </React.Fragment>
  );
};

function formatDate(isoDate) {
  const date = new Date(isoDate || defaultDateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en', options);
}
