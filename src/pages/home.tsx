import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import ProjectList from 'components/project/projectList';
import BlogList from 'components/blog/blogList';

import headshot from 'images/profile.jpg';

import 'components/blog/blog.css';

function Home() {
  return (
    <div>
      <div className='main'>
        {/* Bio */}
        <div className='stripe'>BIO</div>
        <section className='diagonal-box bg-four'>
          <div className='container'>
            <div style={{ display: 'grid', justifyContent: 'center' }}>
              <Biography />
            </div>
          </div>
        </section>

        {/* Projects */}
        <div className='stripe'>RECENT PROJECTS</div>
        <section className='diagonal-box bg-seven'>
          <div className='container'>
            <ProjectList />
          </div>
        </section>

        {/* Writing */}
        <div className='stripe'>WRITING</div>
        <section className='diagonal-box bg-six'>
          <div className='container'>
            <BlogList />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;

function Biography() {
  const [profileToggle, setProfileToggle] = useState(false);

  return (
    <div className='panel' style={{ maxWidth: '42rem' }}>
      <div className='profile-header'>
        <button
          className='image-button'
          onClick={() => setProfileToggle(!profileToggle)}>
          <img src={headshot} alt='' className='profile-pic' />
          <FsLightbox toggler={profileToggle} sources={[headshot]} />
        </button>
        <div className='profile-name-section'>
          <h1>Matt Lovan</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>

      <p>
        I live in New York City and work freelance as a full-stack software
        engineer. I specialize in parachuting into early-stage startups and
        contributing across all levels of the technical stack & business.
      </p>

      <p>
        In my free time I design incentive systems for blockchain applications
        beyond speculation. I believe that we can build structures that enhance
        human agency and enable people to make choices that are more in line
        with their aspirations. My interests lie at the intersection of game
        theory, psychology, and practical engineering.
      </p>

      <h2>Toolkit</h2>
      <span className='tag-container'>
        <span className='tag'>Solidity</span>
        <span className='tag'>Docker</span>
        <span className='tag'>TypeScript</span>
        <span className='tag'>Node</span>
        <span className='tag'>React</span>
      </span>

      {/* Latest Updates */}
      <h2>Currently Working On:</h2>
      <div className='latest-updates'>
        <div className='update'>
          <div className='update-header'>
            <h3 className='update-title'>Referral Tree</h3>
            <span className='update-date'>2025-12-30</span>
          </div>
          <p className='update-description'>
            Build viral growth through multi-level referral rewards.
          </p>
          <a
            href='https://github.com/MagRelo/referralTree'
            target='_blank'
            rel='noopener noreferrer'
            className='update-repo-link'>
            <svg
              className='github-icon'
              viewBox='0 0 24 24'
              fill='currentColor'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            github.com/MagRelo/referralTree
          </a>
        </div>
      </div>
    </div>
  );
}
