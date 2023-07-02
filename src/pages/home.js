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
            <div style={{ display: 'grid', justifyContent: 'center' }}>
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
            theory.
          </p>

          <h2>Concepts</h2>
          <p>
            <span className='tag-container'>
              <a
                className='tag'
                href='https://en.wikipedia.org/wiki/Hold-up_problem'>
                HoldUp Problem
              </a>
              <a
                className='tag'
                href='https://ergodicityeconomics.com/'
                target='_blank'>
                Ergodicity
              </a>
              <a
                className='tag'
                href='https://en.wikipedia.org/wiki/Promise_theory'
                target='_blank'>
                Promise Theory
              </a>
            </span>
          </p>

          <h2>Design & Simulation</h2>
          <p>
            <span className='tag-container'>
              <span className='tag'>cadCAD</span>
              <span className='tag'>Machinations</span>
            </span>
          </p>

          <h2>Development</h2>
          <p>
            <span className='tag-container'>
              <span className='tag'>Solidity</span>
              <span className='tag'>Javascript</span>
            </span>
          </p>

          <br />
        </div>
      </div>
    </div>
  );
}
