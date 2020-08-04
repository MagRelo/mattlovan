import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

import Typist from 'react-typist';

import { ReactComponent as TwitterLogo } from '../images/twitter.svg';
import { ReactComponent as MediumLogo } from '../images/medium.svg';
import { ReactComponent as GithubLogo } from '../images/github.svg';

function Header({ steps }) {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <div className="title">
              Matt Lovan is a
              <div style={{ minHeight: '40px' }}>
                <Typer />
              </div>
            </div>
          </Link>
        </div>
        <SocialContainer />
      </header>

      <div className="stripe"></div>
    </div>
  );
}

export default Header;

export const SocialContainer = () => {
  return (
    <div className="social-container">
      <ul className="social-links">
        <li>
          <SocialAccountLink
            name="Twitter"
            Logo={TwitterLogo}
            fill="#1DA1F2"
            link="https://twitter.com/mattlovan"
            account="Twitter"
          />
        </li>

        <li>
          <SocialAccountLink
            name="Medium"
            Logo={MediumLogo}
            fill="#ddd"
            link="https://medium.com/@mattlovan"
            account="Medium"
          />
        </li>

        <li>
          <SocialAccountLink
            name="Github"
            Logo={GithubLogo}
            fill="#ddd"
            link="https://github.com/magrelo"
            account="GitHub"
          />
        </li>
      </ul>
    </div>
  );
};
//

const SocialAccountLink = ({ link, Logo, account, fill }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="social-label">
          <span className="social-label-icon">
            <Logo fill={fill} />
          </span>
          <div>
            {/* <span className="platform">{name}</span> */}
            <span className="account">{account}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

const Typer = ({ link, Logo, name, account, fill }) => {
  // this will reset the Typer animation to produce loop
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);

  const messages = [
    {
      startDelay: 600,
      content: 'Web Developer',
      backspace: 13,
      backDelay: 3000,
    },
    {
      startDelay: 1500,
      content: 'Dev Ops Guy',
      backspace: 11,
      backDelay: 1800,
    },
    { startDelay: 2600, content: 'Golfer', backspace: 0, backDelay: 1400 },
    { startDelay: 900, content: '(?)', backspace: 9, backDelay: 1800 },
  ];

  return (
    <span>
      {count ? (
        <Typist avgTypingDelay={80} onTypingDone={() => setCount(0)}>
          <Typist.Delay ms={1000} />
          {messages.map((message, index) => {
            return (
              <span key={index}>
                <Typist.Delay ms={message.startDelay} />
                <span>{message.content}</span>
                <Typist.Backspace
                  count={message.backspace}
                  delay={message.backDelay}
                />
              </span>
            );
          })}
        </Typist>
      ) : (
        ''
      )}
    </span>
  );
};
