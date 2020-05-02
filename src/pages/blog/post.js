import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

import { getPost } from 'api/ghost';

import NextPost from 'pages/blog/nextPost';
import Subscribe from 'pages/blog/subscribe';

function Post({ slug }) {
  const [error, setError] = useState([]);
  const [post, setPost] = useState({});

  useEffect(() => {
    getPost(slug)
      .then((post) => setPost(post))
      .catch((error) => setError(error.toString()));
  }, [slug]);

  return (
    <section className="skew-padding">
      <div className="container">
        {error ? <div>{error}</div> : null}
        {post.title ? (
          <div className="post">
            <PostHeader post={post} />
            <div className="spacer-2"></div>

            <div
              className="content"
              dangerouslySetInnerHTML={createMarkup(post.html)}
            />
            <div className="spacer-2"></div>
            <div className="dots">· · ·</div>

            <Subscribe post={post} />
            <hr />
            <NextPost currentPost={post} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
export default Post;

export function PostHeader({ post }) {
  return (
    <div className="post-header">
      <div className="breadcrumbs">
        <div className="date">{formatDate(post.created_at)}</div>
        <Link to="/blog">Home </Link> <b>»</b> {post.title}
      </div>

      <h1>{post.title}</h1>

      {/* Excerpt */}
      {post.excerpt ? <p className="excerpt">{post.excerpt}</p> : null}

      {post.tags.length ? (
        <div className="byline">
          <div className="tag-container">
            {post.tags.map((tag) => {
              return (
                <Link to={'/tag/' + tag.slug} className="tag" key={tag.id}>
                  {tag.name}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function PostFooter({ post }) {
  return (
    <div className="post-header">
      {post.tags.length ? (
        <div className="byline">
          <div className="tag-container">
            {post.tags.map((tag) => {
              return (
                <Link to={'/tag/' + tag.slug} className="tag" key={tag.id}>
                  {tag.name}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
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
