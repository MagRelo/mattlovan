import React from 'react';

import { ReactComponent as GithubLogo } from '../images/github.svg';
import { ReactComponent as TwitterLogo } from '../images/twitter.svg';
import { ReactComponent as MediumLogo } from '../images/medium.svg';

export const SocialAccountLink = ({ name, link, account, fill }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className='social-label'>
          <span className='social-label-icon'>
            <SocialLogo account={account} fill={fill} />
          </span>
          <div>
            <span className='account'>{name}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

const SocialLogo = ({ account, fill }) => {
  function selectLogo(account, fill) {
    switch (account) {
      case 'GitHub':
        return <GithubLogo fill={fill} />;
      case 'Twitter':
        return <TwitterLogo fill={fill} />;
      case 'Medium':
        return <MediumLogo fill={fill} />;
      default:
        console.log('logo not found: ', account);
        break;
    }
  }

  return selectLogo(account, fill);
};
