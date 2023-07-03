import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import BlogList from 'components/blog/blogList';
import ProjectList from 'components/project/projectList';

import headshot from 'images/profile.jpg';

import 'components/blog/blog.scss';

function Home() {
  return (
    <div>
      <div className='main'>
        <div className='stripe'>BIO</div>

        {/* Bio */}
        <section className='diagonal-box bg-four'>
          <div className='container'>
            <div style={{ display: 'grid', justifyContent: 'center' }}>
              <Biography />
            </div>
          </div>
        </section>

        {/* Projects */}
        <div className='stripe'>PROJECTS</div>
        <section className='diagonal-box bg-seven'>
          <div className='container'>
            <div className='grid grid-2'>
              <ProjectList />
            </div>
          </div>
        </section>

        {/* Writing */}
        <div className='stripe'>WRITING</div>
        <section className='diagonal-box bg-six'>
          <div className='container'>
            <div className='grid-3'>
              <BlogList />
            </div>
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
          <p>
            I develop social coordination systems using mechanism design & game
            theory. I've worked on a variety of Web3 applications such as
            user-generated content, networking & recruiting, social media.
          </p>

          <h2>Concepts</h2>
          <p>
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
                Ergodicity
              </a>
              <a
                className='tag'
                href='https://en.wikipedia.org/wiki/Promise_theory'
                rel='noreferrer'
                target='_blank'>
                Promise Theory
              </a>
            </span>
          </p>
          <h2>Tools</h2>
          <p>
            <span className='tag-container'>
              <span className='tag'>Solidity</span>
              <span className='tag'>Javascript</span>
              <span className='tag'>Dev ops</span>
              <span className='tag'>cadCAD</span>
            </span>
          </p>

          <br />
        </div>
      </div>
    </div>
  );
}
