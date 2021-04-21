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

                <h1>Matt Lovan</h1>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugiat vel, adipisci id est nobis sapiente natus distinctio
                  vero excepturi, voluptatibus praesentium! Facere ab nobis
                  perferendis porro quam consequuntur iusto velit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  dignissimos distinctio, quidem nesciunt alias, cumque vero
                  odio consectetur voluptatem aliquid perspiciatis numquam nemo
                  quis enim in placeat voluptatum mollitia minima?
                </p>
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
