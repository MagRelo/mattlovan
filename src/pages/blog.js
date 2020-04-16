import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="">
          <h2>Blog</h2>

          <div className="spacer-60"></div>
          <section className="">
            <div className="container">
              <div className="grid-blog">
                <div>
                  <form action="">
                    <input type="text" />
                    <button>Search </button>
                  </form>
                </div>
                <div>
                  <Post />
                  <Post />
                  <Post />
                </div>
                <div>
                  <ul>
                    <li>Tech</li>
                    <li>Mechanism Design</li>
                    <li>Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;

function Post({ postData }) {
  return (
    <div>
      <h4>Title</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam illo, ut
        molestias quae cupiditate ex architecto, animi dolores id iusto ducimus
        fugit quaerat. Ab sequi quisquam atque doloremque nihil est?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illo
        quasi odit quibusdam hic eveniet asperiores, corporis minus voluptatem
        explicabo accusantium tempora laudantium reiciendis temporibus quis
        sapiente omnis. Placeat, facilis.
      </p>
      <hr />
    </div>
  );
}
