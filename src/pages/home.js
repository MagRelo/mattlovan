import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import BlogList from 'components/blog/blogList';
import ProjectList from 'components/project/projectList';

import skillsChart from 'images/skills_map_v2.jpg';
import headshot from 'images/profile.jpg';

function App() {
  const [toggler, setToggler] = useState(false);
  const [profileToggler, setProfileToggler] = useState(false);

  return (
    <div>
      <div className='main'>
        <section className='diagonal-box bg-four'>
          <div className='container'>
            <div className='grid-2'>
              {/* Bio */}
              <div className='panel pull-down'>
                <button
                  style={{ float: 'left' }}
                  className='image-button'
                  onClick={() => setProfileToggler(!profileToggler)}>
                  <img src={headshot} alt='' className='profile-pic' />
                  <FsLightbox toggler={profileToggler} sources={[headshot]} />
                </button>

                <div>
                  <h1>
                    Hello{' '}
                    <span role='img' aria-label='waving hand'>
                      👋
                    </span>{' '}
                  </h1>
                  <p>I'm Matt Lovan, Full Stack JavaScript developer</p>
                </div>

                <ul className='bio'>
                  {/* Skills Tools */}
                  <li>
                    <p>
                      For the past 8 years I have been helping early startups
                      build amazing software. My default toolkit includes{' '}
                      <b>React</b>, <b>Node</b>, <b>PostgreSQL</b>,{' '}
                      <b>Docker</b>, & <b>Linux</b>. See examples in my{' '}
                      <a href='https:github.com/magrelo'>GitHub</a>.
                    </p>
                  </li>

                  {/* Talent Relay */}
                  <li>
                    <p>
                      I've spent the last year building{' '}
                      <a href='hhtps://talentrelay.app'>Talent Relay</a>, a
                      collaborative marketplace for hiring powered by{' '}
                      <a href='https://medium.com/@incentive_exchange/find-10-red-balloons-collect-40-000-b3cf7984c0a1'>
                        incentive trees
                      </a>
                      . It uses all of the tools above plus integrations with{' '}
                      <b>GMail</b>, <b>Stripe</b>, <b>Plaid</b>, <b>Sendgrid</b>
                      , and more.
                    </p>
                  </li>

                  <li>
                    <p>
                      I'm currently <b>looking to join a team</b> as a Senior
                      Developer or Engineering Manager. See my work experience
                      on{' '}
                      <a href='https://www.linkedin.com/in/matt-lovan/'>
                        LinkedIn
                      </a>{' '}
                      or reach out on{' '}
                      <a href='https:twitter.com/mattlovan'>Twitter</a> or{' '}
                      <a href='https:github.com/magrelo'>GitHub</a>. Thanks!
                    </p>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div>
                <div className='panel pull-up'>
                  <h3>Professional Skills</h3>

                  <button
                    className='image-button'
                    onClick={() => setToggler(!toggler)}>
                    <img
                      style={{ maxWidth: '100%' }}
                      src={skillsChart}
                      alt='chart'
                    />
                  </button>
                  <FsLightbox toggler={toggler} sources={[skillsChart]} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* writing */}
        <div className='stripe'></div>
        <section className='diagonal-box bg-six'>
          <div className='container'>
            <h2 className='section-header'>Writing</h2>
            <div className='mb-4'></div>
            <div className='grid-3'>
              <BlogList />
            </div>
          </div>
        </section>

        {/* Projects */}
        {/* <div className='stripe'></div>
        <section className='diagonal-box bg-seven'>
          <div className='container'>
            <h2 className='section-header'>Projects</h2>
            <div className='mb-4'></div>
            <div className='grid-2'>
              <ProjectList />
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default App;
