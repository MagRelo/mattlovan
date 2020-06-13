import React from 'react';
import { Link } from '@reach/router';

import './ArticleCard.css';

// defaults

// relative time
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addLocale(en);

const defaultImage =
  'https://cdn-images-1.medium.com/max/2000/1*T1NrRFtxijHcsiQVRjRNJA@2x.jpeg';
const defaultDateString = '2018-02-16T18:39:44.651Z';
// const timeAgo = new TimeAgo('en-US');

const ArticleCard = ({ article }) => {
  return (
    <React.Fragment>
      {article.external_url ? (
        <a href={article.external_url} key={article.id}>
          <div className="post-card">
            {/* Image */}
            <div
              className="post-img"
              style={{
                backgroundImage: `url('${article.feature_image ||
                  defaultImage}')`,
              }}
            />

            {/* Content */}
            <div>
              <div className="date">{formatDate(article.created_at)}</div>
              <div className="title">{article.title}</div>
              <p className="excerpt">{article.excerpt}</p>
            </div>
          </div>
        </a>
      ) : (
        <Link to={'/blog/' + article.slug} key={article.id}>
          <div className="post-card">
            {/* Image */}
            <div
              className="post-img"
              style={{
                backgroundImage: `url('${article.feature_image ||
                  defaultImage}')`,
              }}
            />

            {/* Content */}
            <div>
              <div className="date">{formatDate(article.published_at)}</div>
              <div className="title">{article.title}</div>
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
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en', options);
}
