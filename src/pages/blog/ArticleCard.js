import React from 'react';
import { Link } from '@reach/router';

// defaults

// relative time
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addLocale(en);

const defaultImage =
  'https://cdn-images-1.medium.com/max/2000/1*T1NrRFtxijHcsiQVRjRNJA@2x.jpeg';
const defaultDateString = '2018-02-16T18:39:44.651Z';
const timeAgo = new TimeAgo('en-US');

const ArticleCard = ({ article }) => {
  return (
    <React.Fragment>
      {article.external_url ? (
        <a href={article.external_url} key={article.id}>
          <div className="post-card">
            <div className="date">
              <span style={{ float: 'right' }}>
                {timeAgo.format(new Date(article.created_at))}
              </span>
              {/* {formatDate(article.created_at)} */}
            </div>

            {/* Image */}
            <div
              className="post-img"
              style={{
                backgroundImage: `url('${article.feature_image ||
                  defaultImage}')`,
              }}
            />

            <div className="post-title">{article.title}</div>

            {/* Content */}
            <div>
              <p className="excerpt">{article.excerpt}</p>
            </div>
          </div>
        </a>
      ) : (
        <Link to={'/blog/' + article.slug} key={article.id}>
          <div className="post-card">
            <div className="date">
              <span style={{ float: 'right' }}>
                {timeAgo.format(new Date(article.published_at))}
              </span>
            </div>

            {/* Image */}
            <div
              className="post-img"
              style={{
                backgroundImage: `url('${article.feature_image ||
                  defaultImage}')`,
              }}
            />

            {/* Title */}
            <div className="post-title">{article.title}</div>

            {/* Content */}
            <div>
              <p className="excerpt">{article.excerpt}</p>
            </div>
          </div>
        </Link>
      )}
    </React.Fragment>
  );
};

export default ArticleCard;

function formatDate(isoDate) {
  const date = new Date(isoDate || defaultDateString);

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return date.toLocaleDateString('en', options);
}
