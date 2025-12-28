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
          <h2>Software Engineer</h2>

          <p>
            I build blockchain systems for meaningful applications beyond
            speculation—improving coordination, enabling new forms of digital
            ownership, and creating more transparent governance structures. My
            work sits at the intersection of game theory, psychology, and
            practical engineering.
          </p>

          <h2>Toolkit</h2>
          <span className='tag-container'>
            <span className='tag'>TypeScript</span>
            <span className='tag'>React</span>
            <span className='tag'>Node.js</span>
            <span className='tag'>Solidity</span>
            <span className='tag'>Docker</span>
            <span className='tag'>Foundry</span>
            <span className='tag'>Vite</span>
            <span className='tag'>MongoDB</span>
            <span className='tag'>Web3</span>
          </span>

          <br />
        </div>
      </div>
    </div>
  );
}
