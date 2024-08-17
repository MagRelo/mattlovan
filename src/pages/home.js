import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import ProjectList from 'components/project/projectList';
import BlogList from 'components/blog/blogList';

import headshot from 'images/profile.jpg';

import 'components/blog/blog.scss';

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
      <div className='grid-x-2'>
        <div>
          <button
            style={{ float: 'left' }}
            className='image-button'
            onClick={() => setProfileToggle(!profileToggle)}>
            <img src={headshot} alt='' className='profile-pic' />
            <FsLightbox toggler={profileToggle} sources={[headshot]} />
          </button>
        </div>
        <div>
          <h1>Matt Lovan</h1>
          <h2>Fullstack Engineer</h2>

          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          {/* <h2>Concepts</h2>
          <span className='tag-container'>
            <a
              className='tag'
              href='https://en.wikipedia.org/wiki/Hold-up_problem'
              rel='noreferrer'
              target='_blank'>
              {' '}
              HoldUp Problem
            </a>
            <a
              className='tag'
              href='https://ergodicityeconomics.com/'
              rel='noreferrer'
              target='_blank'>
              Ergodicity Economics
            </a>
            <a
              className='tag'
              href='https://en.wikipedia.org/wiki/Promise_theory'
              rel='noreferrer'
              target='_blank'>
              Promise Theory
            </a>
          </span> */}

          <h2>Toolkit</h2>
          <span className='tag-container'>
            <span className='tag'>Solidity</span>
            <span className='tag'>Node</span>
            <span className='tag'>React</span>
          </span>

          <br />
        </div>
      </div>
    </div>
  );
}
