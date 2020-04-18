import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

import { getPost } from '../../api/ghost';
import TimeAgo from 'javascript-time-ago';

function Post({ slug }) {
  const [error, setError] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(slug)
      .then((post) => setPost(post))
      .catch((error) => setError(error));
  }, [slug]);

  return (
    <section style={{ marginTop: '60px' }}>
      <div className="container" style={{ margin: '0 auto', maxWidth: '42em' }}>
        {post ? (
          <div className="blogpost">
            <div className="breadcrumbs">
              <Link to="/blog">Blog </Link> ▸ {post.title}
            </div>

            <PostHeader post={post} />

            <div className="spacer-2"></div>

            <div
              className="content"
              dangerouslySetInnerHTML={createMarkup(post.html)}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
export default Post;

export function PostHeader({ post }) {
  return (
    <div className="blogpost">
      <h1>{post.title}</h1>
      <p className="excerpt">{post.excerpt}</p>
      <div className="byline">
        <div>
          <div>
            {post.tags.map((tag) => {
              return (
                <Link to={'/tag/' + tag.slug} className="tag" key={tag.id}>
                  {tag.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div>by {post.primary_author.name}</div>
        <div className="date">{formatDate(post.created_at)}</div>
      </div>
    </div>
  );
}

function createMarkup(input) {
  return { __html: input };
}

export function formatDate(input) {
  if (input instanceof Date) {
    return input.toLocaleDateString('en-US');
  } else {
    const date = new Date(input);
    return date.toLocaleDateString('en-US');
  }
}
