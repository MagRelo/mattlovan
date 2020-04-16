import React, { useState, useEffect } from 'react';

import Typist from 'react-typist';

import { ReactComponent as TwitterLogo } from '../images/twitter.svg';
import { ReactComponent as MediumLogo } from '../images/medium.svg';
import { ReactComponent as GithubLogo } from '../images/github.svg';

function Header({ steps }) {
  return (
    <header>
      <div>
        <h1>
          Matt Lovan is a <br /> <Typer />
        </h1>
        <p></p>
      </div>

      <div className="social-container">
        <ul className="social-links">
          <li>
            <SocialAccountLink
              name="Twitter"
              Logo={TwitterLogo}
              fill="#1DA1F2"
              link="https://twitter.com/mattlovan"
              account="@mattlovan"
            />
          </li>

          <li>
            <SocialAccountLink
              name="Medium"
              Logo={MediumLogo}
              fill="#ddd"
              link="https://medium.com/@mattlovan"
              account="@mattlovan"
            />
          </li>

          <li>
            <SocialAccountLink
              name="Github"
              Logo={GithubLogo}
              fill="#ddd"
              link="https://github.com/magrelo"
              account="magrelo"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

//

const SocialAccountLink = ({ link, Logo, account, fill }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="social-label">
          <span className="icon">
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
      startDelay: 1800,
      content: 'Web Developer',
      backspace: 9,
      backDelay: 3000,
    },
    { startDelay: 500, content: 'Architect', backspace: 13, backDelay: 1800 },
    { startDelay: 2600, content: 'Golfer', backDelay: 3800 },
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
                  count={message.backspace || message.content.length}
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
