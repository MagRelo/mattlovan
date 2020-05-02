import React, { useState, useEffect } from 'react';
import PostTeaser from 'pages/blog/postTeaser';

import { getNextPost } from 'api/ghost';

export default function NextPost({ currentPost }) {
  const [error, setError] = useState([]);
  const [nextPost, setNextPost] = useState(null);

  useEffect(() => {
    const tagArray = currentPost.tags.map((tag) => tag.slug);
    const tagList = tagArray.join(',');

    if (tagArray.length) {
      getNextPost(tagList, currentPost.id)
        .then((post) => setNextPost(post))
        .catch((error) => setError(error.toString()));
    } else {
      console.log('NextPost: no tags');
    }
  }, [currentPost.slug, currentPost.id]);

  return (
    <React.Fragment>
      {nextPost ? (
        <div>
          <div className="h2">Up Next...</div>
          <div className="spacer-1"></div>
          <PostTeaser post={nextPost} />
        </div>
      ) : null}

      {error ? <p>{error}</p> : null}
    </React.Fragment>
  );
}
