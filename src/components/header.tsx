import React, { useState, useEffect, useRef } from 'react';

import { SocialAccountLink } from './SocialLink';

interface HeaderProps {
  steps?: unknown;
}

function Header({ steps }: HeaderProps) {
  return (
    <header>
      <div>
        <div className='title'>
          Matt Lovan is a
          <div
            style={{
              height: '1.2em',
              display: 'block',
            }}>
            <Typer />
          </div>
        </div>
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
            name='Github'
            fill='#ddd'
            link='https://github.com/magrelo'
            account='GitHub'
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
      </ul>
    </div>
  );
};

const Typer = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const messages = [
    'Software engineer',
    'mechanism designer',
    'solidity dev',
    'web developer',
  ];

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    const typingDelay = 80;
    const deletingDelay = 50;
    const pauseAfterTyping = 3000;
    const pauseAfterDeleting = 1000;

    if (!isDeleting && currentIndex < currentMessage.length) {
      // Typing
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentMessage.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingDelay);
    } else if (!isDeleting && currentIndex === currentMessage.length) {
      // Pause after typing
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentMessage.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, deletingDelay);
    } else if (isDeleting && currentIndex === 0) {
      // Pause after deleting, move to next message
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setMessageIndex((messageIndex + 1) % messages.length);
      }, pauseAfterDeleting);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isDeleting, messageIndex]);

  return (
    <span>
      {displayText}
      <span className='typer-cursor'>_</span>
    </span>
  );
};
