import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import BlogList from 'pages/blog/blogList';
import ProjectList from 'pages/project/projectList';

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

                <h2>Hello 👋 </h2>

                <p>I'm Matt Lovan, Full Stack JavaScript developer.</p>
                <p>
                  I'm a full-stack developer focused on the web, from interfaces
                  & databases to deployment. I work on new ways to cooperate
                  using mechanism design, programmable value (Ethereum & Web3),
                  and the open web. Check out my latest projects in the projects
                  section below.
                </p>
                <p>
                  I'm always interested in new projects and collaborations so
                  please reach out if you need help!
                </p>
              </div>
              <div>
                <div className="panel pull-up">
                  <h2>KSA Map</h2>
                  <p>Knowledge, Skills & Abilities</p>

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
        <section className="diagonal-box bg-three">
          <div className="container">
            <h2>Current Projects</h2>
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
            <h2>Recent Articles</h2>
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
