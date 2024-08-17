import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

import { SocialAccountLink } from './SocialLink';

import Typist from 'react-typist';

function Header({ steps }) {
  return (
    <header>
      <div>
        <Link to='/'>
          <div className='title'>
            Matt Lovan is a
            <div style={{ minHeight: '1em' }}>
              <Typer />
            </div>
          </div>
        </Link>
      </div>
      <SocialContainer />
    </header>
  );
}

export default Header;

export const SocialContainer = () => {
  return (
    <div className='social-container'>
      <ul className='social-links'>
        <li>
          <SocialAccountLink
            name='Twitter'
            fill='#1DA1F2'
            link='https://twitter.com/mattlovan'
            account='Twitter'
          />
        </li>

        <li>
          <SocialAccountLink
            name='Medium'
            fill='#ddd'
            link='https://medium.com/@mattlovan'
            account='Medium'
          />
        </li>

        <li>
          <SocialAccountLink
            name='Github'
            fill='#ddd'
            link='https://github.com/magrelo'
            account='GitHub'
          />
        </li>
      </ul>
    </div>
  );
};
//

const Typer = ({ link, Logo, name, account, fill }) => {
  // this will reset the Typer animation to produce loop
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);

  const messages = [
    {
      startDelay: 600,
      content: 'Software engineer',
      backspace: 19,
      backDelay: 3000,
    },
    {
      startDelay: 1500,
      content: 'mechanism designer',
      backspace: 18,
      backDelay: 2000,
    },
    {
      startDelay: 900,
      content: 'solidity dev',
      backspace: 12,
      backDelay: 2400,
    },
    {
      startDelay: 1200,
      content: 'web developer',
      backspace: 13,
      backDelay: 2400,
    },
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
