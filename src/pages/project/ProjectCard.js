import React from 'react';
import './ProjectCard.scss';

const defaultImage =
  'https://cdn-images-1.medium.com/max/2000/1*T1NrRFtxijHcsiQVRjRNJA@2x.jpeg';
const defaultDateString = '2018-02-16T18:39:44.651Z';

const ArticleCard = ({ article }) => {
  return (
    <React.Fragment>
      <a href={article.external_url} key={article.id}>
        <div className="post-card project-card">
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
            <div className="post-title">{article.title}</div>
            <p className="excerpt">{article.excerpt}</p>
          </div>

          {/* status  */}
          <div className="status-grid">
            <div className="status-label">Status:</div>
            <div className="status-content">{article.status}</div>
            <div className="status-label">Deployed:</div>
            <div className="status-content">
              {formatDate(article.created_at)}
            </div>
          </div>
        </div>
      </a>
    </React.Fragment>
  );
};

export default ArticleCard;

function formatDate(isoDate) {
  const date = new Date(isoDate || defaultDateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en', options);
}
