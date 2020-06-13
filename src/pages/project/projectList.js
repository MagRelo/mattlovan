import React from 'react';

import Card from 'pages/project/ProjectCard';

import TalentRelay from 'images/talentrelay.png';
import PositionPaper from 'images/positionpaper.png';

function ProjectList() {
  return (
    <React.Fragment>
      {projects.map((post, index) => {
        return <Card article={post} key={post.id || index} />;
      })}
    </React.Fragment>
  );
}

export default ProjectList;

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
