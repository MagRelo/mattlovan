import React, { useState, useEffect } from 'react';

import { getPosts } from 'api/ghost';

import PostTeaser from 'pages/blog/postTeaser';

function BlogHome() {
  const [error, setError] = useState([]);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPosts()
      .then((posts) => setPostList(posts))
      .catch((error) => setError(error.toString()));
  }, []);

  return (
    <section className="blog-list">
      <div className="container" style={{ margin: '0 auto', maxWidth: '42em' }}>
        <h1>Blog</h1>
        {error ? <div>{error}</div> : null}
        {postList.map((post) => {
          return <PostTeaser post={post} key={post.id} />;
        })}
      </div>
    </section>
  );
}

export default BlogHome;

// function SearchForm(params) {
//   return (
//     <div className="panel">
//       <form action="">
//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="">Filter By Topic</label>

//             <div>
//               <label>
//                 <input
//                   className="form-radio"
//                   name="paymentSourceCheck"
//                   id="usePaymentSource"
//                   type="checkbox"
//                   checked={false}
//                   onChange={(e) => {
//                     // setUsePaymentSource(e.target.checked);
//                     console.log(e.target.checked);
//                   }}
//                 />
//                 Tech
//               </label>
//             </div>

//             <div>
//               <label>
//                 <input
//                   className="form-radio"
//                   name="paymentSourceCheck"
//                   id="usePaymentSource"
//                   type="checkbox"
//                   checked={false}
//                   onChange={(e) => {
//                     // setUsePaymentSource(e.target.checked);
//                     console.log(e.target.checked);
//                   }}
//                 />
//                 Software Design
//               </label>
//             </div>

//             <div>
//               <label>
//                 <input
//                   className="form-radio"
//                   name="paymentSourceCheck"
//                   id="usePaymentSource"
//                   type="checkbox"
//                   checked={false}
//                   onChange={(e) => {
//                     // setUsePaymentSource(e.target.checked);
//                     console.log(e.target.checked);
//                   }}
//                 />
//                 Future of Work
//               </label>
//             </div>

//             <div>
//               <label>
//                 <input
//                   className="form-radio"
//                   name="paymentSourceCheck"
//                   id="usePaymentSource"
//                   type="checkbox"
//                   checked={false}
//                   onChange={(e) => {
//                     // setUsePaymentSource(e.target.checked);
//                     console.log(e.target.checked);
//                   }}
//                 />
//                 Mechanism Design
//               </label>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset>
//           <div className="form-group">
//             <label htmlFor="">Search</label>
//             <input className="form-control" type="text" />
//             <small>Enter a term to search</small>
//           </div>
//         </fieldset>

//         <button className="btn btn-primary">Search </button>
//       </form>
//     </div>
//   );
// }
