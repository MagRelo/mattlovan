import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import BlogList from 'pages/blog/blogList';

import skillsChart from 'images/skills.jpg';
import headshot from 'images/matt_grey.jpg';

function App() {
  const [toggler, setToggler] = useState(false);

  return (
    <div>
      <div className="main">
        <section className="diagonal-box bg-three">
          <div className="container">
            <div className="mb-4"></div>
            <div className="grid-2">
              <div className="panel pull-down">
                <img src={headshot} alt="" className="profile-pic" />
                <h2>Matt Lovan</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Temporibus sequi accusamus dolorum laborum labore,
                  reprehenderit, et corporis recusandae odio qui vitae eius,
                  quibusdam delectus minima perspiciatis unde consequuntur id
                  blanditiis.{' '}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Error modi doloremque sed? Obcaecati beatae, voluptates maxime
                  impedit atque soluta animi consectetur quas ad, voluptas,
                  laboriosam voluptatibus accusamus cum quo dignissimos?
                </p>
              </div>
              <div>
                <div className="panel pull-up">
                  <h2>KSA's</h2>
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
        <section className="diagonal-box bg-four">
          <div className="container">
            <h2>Recent Articles</h2>
            <div className="mb-4"></div>
            <div className="grid-3">
              <BlogList />
            </div>
          </div>
        </section>
        {/* <div className="stripe"></div>
        <section className="diagonal-box bg-five">
          <div className="container">
            <h2>Projects & Demos</h2>
            <p></p>
            <div className="mb-4"></div>
            <div className="grid-3">
              <BlogList />
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default App;
