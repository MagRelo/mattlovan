import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import BlogList from 'pages/blog/blogList';
import ProjectList from 'components/project/projectList';

import skillsChart from 'images/skills.jpg';
import headshot from 'images/profile.jpg';

function App() {
  const [toggler, setToggler] = useState(false);
  const [profileToggler, setProfileToggler] = useState(false);

  return (
    <div>
      <div className="main">
        <section className="diagonal-box bg-four">
          <div className="container">
            <div className="mb-4"></div>
            <div className="grid-2">
              <div className="panel pull-down">
                <button
                  style={{ float: 'left' }}
                  className="image-button"
                  onClick={() => setProfileToggler(!profileToggler)}
                >
                  <img src={headshot} alt="" className="profile-pic" />
                  <FsLightbox toggler={profileToggler} sources={[headshot]} />
                </button>

                <h1>
                  Hello{' '}
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>{' '}
                </h1>

                <p>I'm Matt Lovan, Full Stack JavaScript developer.</p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, quia laudantium quod commodi neque dicta! Quos nulla
                  culpa delectus modi nisi laudantium enim temporibus tenetur
                  asperiores alias quam, vero incidunt.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati dicta magni ea adipisci, explicabo officia illo
                  suscipit ab! Nobis aperiam officiis cumque aliquam saepe
                  totam. Inventore dolores consectetur numquam saepe.
                </p>
              </div>
              <div>
                <div className="panel pull-up">
                  <h3>Professional Skills</h3>

                  <button
                    className="image-button"
                    onClick={() => setToggler(!toggler)}
                  >
                    <img
                      style={{ maxWidth: '100%' }}
                      src={skillsChart}
                      alt="chart"
                    />
                  </button>
                  <FsLightbox toggler={toggler} sources={[skillsChart]} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="stripe"></div>
        <section className="diagonal-box bg-five">
          <div className="container">
            <h2 className="section-header">Current Projects</h2>
            <p></p>
            <div className="mb-4"></div>
            <div className="grid-2">
              <ProjectList />
            </div>
          </div>
        </section>

        {/* writing */}
        <div className="stripe"></div>
        <section className="diagonal-box bg-six">
          <div className="container">
            <h2 className="section-header">Recent Posts</h2>
            <div className="mb-4"></div>
            <div className="grid-3">
              <BlogList />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
